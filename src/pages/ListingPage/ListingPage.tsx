import { getInternships } from '@/api/get/getters'
import Header from '@/components/custom/Header'
import { Internship } from '@/models/internship'
import React, { useEffect, useState } from 'react'

const ListingPageComponent = () => {
  const [internships, setInternships] = useState<Internship[]>([])

  useEffect(() => {
    const fetchInternships = async () => {
      const response = await getInternships();

      setInternships(response);
    }

    fetchInternships();
  })
  
  return (
    <main>
      <Header />
      <div className='px'>

      </div>
    </main>
  )
}

const ListingPage = () => {
  return <ListingPageComponent /> 
}

export default ListingPage