export type Internship = {
  id: number;
  image: string;
  title: string;
  description: string;
  company: string;
  location: string;
  role: string;
  work_setup: string;
  compensation: "Paid" | "Unpaid";
  rate?: string;
  skill_requirements?: string[],
  featured: boolean;
}