import DataCard from '@/components/custom/DataCard';
import Header from '@/components/custom/Header';
import useListing from '@/hooks/useListing';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { FilterButtons, FilterButtonsOptions } from '@/models/internship';
import { SelectContent, SelectValue } from '@radix-ui/react-select';
import { MapPin, SearchIcon } from 'lucide-react';

type FilterButtonsType = {
  filter: FilterButtons;
  getOptions: (key: string) => FilterButtonsOptions;
  dispatchFilter: (action: any) => void;
};
const FilterButtonsComponent = (props: FilterButtonsType) => {
  const { filter, getOptions, dispatchFilter } = props;
  const options = getOptions(filter);

  if (options.type === 'single-select') {
    return (
      <Select onValueChange={(value) => dispatchFilter({ type: options.dispatch, payload: value })}>
        <SelectTrigger>
          <SelectValue placeholder={options.label} />
        </SelectTrigger>
        <SelectContent className='bg-white'>
          {options.options.map((option) => (
            <SelectItem key={options.label} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
};

const ListingPageComponent = () => {
  const { filteredInternships, error, isLoading, filters, filterButtons, dispathFilter, getOptions } = useListing();

  return (
    <>
      <Header />
      <main className='custom__container'>
        <h1 className='text-primary text-left my-12'>Listings</h1>
        <div className='border shadow-custom rounded-lg'>
          <div className='px-6 py-3 flex items-center gap-1 border-b'>
            <div className='flex'>
              <div className='flex px-2 items-center border rounded-lg'>
                <SearchIcon size={16} className='text-secondary' />
                <Input
                  value={filters.title}
                  onChange={(e) => dispathFilter({ type: 'SET_TITLE', payload: e.target.value })}
                  className='bg-transparent border-none'
                  placeholder='Search for Internships'
                />
              </div>
            </div>
            <div className='flex'>
              <div className='flex px-2 items-center border rounded-lg'>
                <MapPin size={16} className='text-secondary' />
                <Input
                  value={filters.location}
                  onChange={(e) => dispathFilter({ type: 'SET_LOCATION', payload: e.target.value })}
                  className='bg-transparent border-none'
                  placeholder='Enter Location'
                />
              </div>
            </div>
            <div className='flex gap-1'>
              {filterButtons.map((filter, index) => (
                <div key={index}>
                  <FilterButtonsComponent filter={filter} getOptions={getOptions} dispatchFilter={dispathFilter} />
                </div>
              ))}
            </div>
          </div>
          <div className='px-6 py-3'></div>
        </div>
        <div className='flex flex-wrap justify-center gap-6 mt-6 my-12'>
          {error && <div>{error}</div>}
          {isLoading && <div>Loading...</div>}
          {!isLoading && filteredInternships.length === 0 && <div>No Internships Found</div>}
          {!isLoading && filteredInternships.map((internship) => <DataCard key={internship.id} {...internship} />)}
        </div>
      </main>
    </>
  );
};

const ListingPage = () => {
  return <ListingPageComponent />;
};

export default ListingPage;
