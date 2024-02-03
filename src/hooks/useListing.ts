import { getInternships } from '@/api/get/getters';
import { Internship } from '@/models/internship';
import { useEffect, useState } from 'react';

const useInternships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    const fetchInternships = async () => {
      const response = await getInternships();

      if (response.status === 'error') {
        setError(response.message as string);
      } else {
        setInternships(response.data as Internship[]);
        setFilteredInternships(response.data as Internship[]);
        setIsLoading(false);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    if (search === '' && location === '') {
      setFilteredInternships(internships);
      return;
    }

    setIsLoading(true);
    const timerId = setTimeout(() => {
      let results = internships;

      if (search) {
        results = results.filter((internship) => (
          internship.title.toLowerCase().includes(search.toLowerCase())
        ))
      }

      if (location) {
        results = results.filter((internship) => (
          internship.location.toLowerCase().includes(location.toLowerCase())
        ))
      }
      
      setFilteredInternships(results);
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timerId);
  }, [search, location]);

  return {
    filteredInternships,
    error,
    search,
    isLoading,
    location,
    setLocation,
    setSearch
  };
};

export default useInternships;
