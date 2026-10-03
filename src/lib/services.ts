import type { LucideIcon } from "lucide-react";
import { GraduationCap } from "lucide-react";

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  live: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "academic-support",
    title: "Academic Support",
    description:
      "From project documentation to data analysis — practical support for final-year students managing heavy workloads.",
    icon: GraduationCap,
    href: "/services/academic-support",
    live: true,
  },
  // To add a new category, copy the object above and change the values.
  // Set live: true when the category page is ready.
];

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export const academicSupportServices: ServiceItem[] = [
  {
    number: "01",
    title: "Final-Year Project Support",
    description:
      "Report structure, editing, formatting, and research guidance.",
  },
  {
    number: "02",
    title: "IT / SIWES Documentation",
    description:
      "Industrial training report organization, documentation support, and formatting.",
  },
  {
    number: "03",
    title: "Logbook Support",
    description:
      "Help organizing actual training activities and preparing clear, accurate logbook entries.",
  },
  {
    number: "04",
    title: "Questionnaire & Fieldwork Analysis",
    description:
      "Questionnaire data organization, coding, interpretation, and presentation of findings.",
  },
  {
    number: "05",
    title: "Statistical Data Analysis",
    description:
      "Support with data analysis using appropriate statistical methods and tools, including tables, charts, and interpretation of results.",
  },
];

export const phoneNumbers = [
  { display: "0810 098 2105", tel: "+2348100982105" },
  { display: "0814 981 7027", tel: "+2348149817027" },
];
