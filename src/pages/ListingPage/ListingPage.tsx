import DataCard from '@/components/custom/DataCard';
import Header from '@/components/custom/Header';
import { Input } from '@/components/ui/input';
import useListing from '@/hooks/useListing';
import { MapPin, SearchIcon } from 'lucide-react';

const ListingPageComponent = () => {
  const { filteredInternships, error, search, setSearch } = useListing();

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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='bg-transparent border-none'
                  placeholder='Search for Internships'
                />
              </div>
            </div>
            <div className='flex'>
              <div className='flex px-2 items-center border rounded-lg'>
                <MapPin size={16} className='text-secondary' />
                <Input className='bg-transparent border-none' placeholder='Enter Location' />
              </div>
            </div>
          </div>
          <div className='px-6 py-3'></div>
        </div>
        <div className='flex flex-wrap justify-center gap-6 mt-6 my-12'>
          {error && <div>{error}</div>}
          {filteredInternships.map((internship) => (
            <DataCard key={internship.id} {...internship} />
          ))}
        </div>
      </main>
    </>
  );
};

const ListingPage = () => {
  return <ListingPageComponent />;
};

export default ListingPage;
