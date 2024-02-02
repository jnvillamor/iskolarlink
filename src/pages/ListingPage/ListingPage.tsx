import { getInternships } from '@/api/get/getters';
import DataCard from '@/components/custom/DataCard';
import Header from '@/components/custom/Header';
import { Internship } from '@/models/internship';
import React, { useEffect, useState } from 'react';

const ListingPageComponent = () => {
  // const [internships, setInternships] = useState<Internship[]>([]);

  // useEffect(() => {
  //   const fetchInternships = async () => {
  //     const response = await getInternships();

  //     setInternships(response);
  //   };

  //   fetchInternships();
  // });

  return (
    <>
      <Header />
      <main className='custom__container'>
        <h1 className='text-primary text-left'>Listings</h1>
        <div className='container flex flex-wrap justify-center gap-6 mt-6 my-12'>
          {/* {internships.map((internship) => (
          <DataCard key={internship.id} {...internship} />
        ))} */}
        </div>
      </main>
    </>
  );
};

const ListingPage = () => {
  return <ListingPageComponent />;
};

export default ListingPage;
