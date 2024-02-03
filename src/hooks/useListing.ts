import { getInternships } from '@/api/get/getters';
import { Internship } from '@/models/internship';
import { useEffect, useState } from 'react';

const useInternships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      const response = await getInternships();

      if (response.status === 'error') {
        setError(response.message as string);
      } else { 
        setInternships(response.data as Internship[]);
        setFilteredInternships(response.data as Internship[]);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    if(search === '') {
      setFilteredInternships(internships);
      return;
    }

    setIsSearching(true);
    const timerId = setTimeout(() => {
      setIsSearching(false);
      setFilteredInternships(
        internships.filter((internship) =>
          internship.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, 500)

    return () => clearTimeout(timerId)
  }, [search])


  return {
    filteredInternships,
    error,
    search,
    isSearching,
    setSearch,
  };
};

export default useInternships;
