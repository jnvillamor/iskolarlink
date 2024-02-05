import DataCard from '@/components/custom/DataCard';
import Header from '@/components/custom/Header';
import useListing from '@/hooks/useListing';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Filter, FilterButtons, FilterButtonsOptions } from '@/models/internship';
import { SelectContent, SelectValue } from '@radix-ui/react-select';
import { Check, ChevronDown, MapPin, SearchIcon, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';

type FilterButtonsType = {
  filter: FilterButtons;
  filters: Filter;
  getOptions: (key: string) => FilterButtonsOptions;
  dispatchFilter: (action: any) => void;
};
const FilterButtonsComponent = (props: FilterButtonsType) => {
  const [open, setOpen] = useState(false);
  const { filter, filters, getOptions, dispatchFilter } = props;
  const options = getOptions(filter);

  if (options.type === 'single-select') {
    return (
      <Select onValueChange={(value) => dispatchFilter({ type: options.dispatch, payload: value })}>
        <SelectTrigger className='hover:bg-accent'>
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

  if (options.type === 'multi-select') {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button role='combobox' aria-expanded={open} variant='outline' className='bg-white'>
            {options.label}
            <ChevronDown size={16} className='text-secondary' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className=''>
          <Command>
            <CommandInput placeholder='Search' />
            <CommandEmpty>{options.label} not found.</CommandEmpty>
            <CommandGroup>
              {options.options?.map((option, index) => (
                <CommandItem key={index} value={option} onSelect={(value) => dispatchFilter({ type: options.dispatch, payload: value })}>
                  <Check className={cn('mr-4 h-4 2-4', filters[filter]?.includes(option) ? 'opacity-100' : 'opacity-0')} />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
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
                  <FilterButtonsComponent filters={filters} filter={filter} getOptions={getOptions} dispatchFilter={dispathFilter} />
                </div>
              ))}
            </div>
          </div>
          <div className='px-6 py-3 flex gap-2'>
            {filters.compensation && (
              <Button variant='outline'>
                {filters.compensation}
                <X size={16} className='text-secondary ml-2' onClick={() => dispathFilter({ type: 'SET_COMPENSATION', payload: null })} />
              </Button>
            )}
            {filters.work_setup && (
              <Button variant='outline'>
                {filters.work_setup}
                <X size={16} className='text-secondary ml-2' onClick={() => dispathFilter({ type: 'SET_WORK_SETUP', payload: null })} />
              </Button>
            )}
            {filters.role.length > 0 &&
              filters.role.map((role, index) => (
                <Button variant='outline' key={index}>
                  {role}
                  <X size={16} className='text-secondary ml-2' onClick={() => dispathFilter({ type: 'SET_ROLE', payload: role })} />
                </Button>
              ))}
            {filters.skill_requirements.length > 0 &&
              filters.skill_requirements.map((skill, index) => (
                <Button variant='outline' key={index}>
                  {skill}
                  <X size={16} className='text-secondary ml-2' onClick={() => dispathFilter({ type: 'SET_SKILL_REQUIREMENTS', payload: skill })} />
                </Button>
              ))}
          </div>
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
