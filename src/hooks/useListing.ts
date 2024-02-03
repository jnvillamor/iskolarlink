import { getInternships } from '@/api/get/getters';
import { Filter, FilterAction, Internship } from '@/models/internship';
import { useEffect, useReducer, useState } from 'react';

const useInternships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initialiFilter: Filter = {
    title: '',
    location: '',
    compensation: null,
    role: [],
    skill_requirements: [],
    work_setup: null
  };

  const filterReducer = (state: Filter, action: FilterAction) => {
    const { type, payload } = action;

    switch (type) {
      case 'SET_TITLE':
        return { ...state, title: payload };
      case 'SET_LOCATION':
        return { ...state, location: payload };
      case 'SET_COMPENSATION':
        return { ...state, compensation: payload };
      case 'SET_ROLE':
        if (state.role.includes(payload)) {
          return { ...state, roles: state.role.filter((r) => r !== payload) };
        } else {
          return { ...state, roles: [...state.role, payload] };
        }
      case 'SET_SKILL_REQUIREMENTS':
        if (state.skill_requirements.includes(payload)) {
          return { ...state, skill_requirements: state.skill_requirements.filter((skill) => skill !== payload) };
        } else {
          return { ...state, skill_requirements: [...state.skill_requirements, payload] };
        }
      case 'SET_WORK_SETUP':
        return { ...state, work_setup: payload };
      default:
        return state;
    }
  };

  const [filters, dispathFilter] = useReducer(filterReducer, initialiFilter);

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
    setIsLoading(true);
    const timerId = setTimeout(() => {
      const results = internships.filter((internship) => {
        return Object.entries(filters).every(([key, value]) => {
          if (value === null || value === '' || value.length === 0) return true;

          if (typeof value === 'string') {
            value = value as string;
            const internshipValue = internship[key as keyof Internship] as string;

            return internshipValue.toLowerCase().includes(value.toLowerCase());
          }

          if (typeof value === 'object') {
            value = value as string[];
            const internshipValue = internship[key as keyof Internship] as string[];
            if (!internshipValue) return false;
            return value.some((v) => internshipValue.includes(v));
          }
        });
      });
      setFilteredInternships(results);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timerId);
  }, [filters, internships]);

  return {
    filteredInternships,
    error,
    isLoading,
    filters,
    dispathFilter
  };
};

export default useInternships;
