export type WorkSetup = 'Remote' | 'Onsite' | 'Hybrid';

export type Compensation = 'Paid' | 'Unpaid';

export type Internship = {
  id: string;
  image: string;
  title: string;
  description: string;
  company: string;
  location: string;
  role: string;
  work_setup: WorkSetup;
  compensation: Compensation;
  rate?: string;
  skill_requirements?: string[];
  featured: boolean;
};

export type Filter = {
  title: string | undefined;
  location: string | undefined;
  compensation: 'Paid' | 'Unpaid' | null;
  role: string[];
  skill_requirements: string[];
  work_setup: 'Remote' | 'Onsite' | 'Hybrid' | null;
};

export type FilterAction =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_LOCATION'; payload: string }
  | { type: 'SET_COMPENSATION'; payload: 'Paid' | 'Unpaid' | null }
  | { type: 'SET_ROLE'; payload: string }
  | { type: 'SET_SKILL_REQUIREMENTS'; payload: string }
  | { type: 'SET_WORK_SETUP'; payload: 'Remote' | 'Onsite' | 'Hybrid' | null };

export type FilterButtons = 'compensation' | 'role' | 'skill_requirements' | 'work_setup';

export type FilterButtonsOptions = {
  label: string;
  options: string[];
  type: 'multi-select' | 'single-select';
  dispatch: FilterAction['type'];
};
