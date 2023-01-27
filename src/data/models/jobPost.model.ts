export interface JobPost {
  id: number;
  logo: string;
  new: boolean;
  role: string;
  level: string;
  tools: string[];
  company: string;
  postedAt: string;
  position: string;
  contract: string;
  location: string;
  featured: boolean;
  languages: string[];
}
