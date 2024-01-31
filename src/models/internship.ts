export type Internship = {
  id: string;
  image: string;
  title: string;
  description: string;
  company: string;
  location: string;
  role: string;
  work_setup: "Remote" | "Onsite" | "Hybrid";
  compensation: "Paid" | "Unpaid";
  rate?: string;
  skill_requirements?: string[],
  featured: boolean;
}