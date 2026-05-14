export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "achievement" | "event";
  status?: "in-progress" | "completed";
  highlight?: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "btech",
    title: "Bachelor of Technology in Computer Science Engineering",
    organization: "Vardhaman College of Engineering",
    period: "2025 – 2028",
    description:
      "Pursuing B.Tech in CSE with a focus on AI, full-stack development, and modern software engineering practices.",
    type: "education",
    status: "in-progress",
  },
  {
    id: "diploma",
    title: "Diploma in Computer Science & Engineering",
    organization: "KDR Government Polytechnic, Wanaparthy",
    period: "2022 – 2025",
    description:
      "Completed diploma with 8.8 CGPA, building a strong foundation in programming, data structures, and software engineering.",
    type: "education",
    status: "completed",
    highlight: "CGPA: 8.8",
  },
];
