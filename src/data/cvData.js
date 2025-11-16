// TODO: IMPORTANT - Fix date conflicts before deploying!
// Current conflicts:
// - Realestate.com.kh (07/2018 – 08/2025) overlaps with DCG (07/2018 – 08/2024)
// - Lamudi (08/2024 – 08/2025) overlaps with Realestate
// Please clarify the correct employment timeline

export const personalInfo = {
  name: "Kimhuo Chhoeurng",
  title: "Senior React Native Developer",
  subtitle: "Cross-Platform Mobile Apps Specialist | iOS & Android",
  email: "kimhuo99@gmail.com",
  phone: "+855 97 64 17 472",
  location: "Phnom Penh, Cambodia",
  locationNote: "Open to Remote",
  dateOfBirth: "06 Feb, 1995",
  nationality: "Khmer",
  gender: "Male",
  linkedin: "https://www.linkedin.com/in/kimhuo/",
  github: "", // Add if you have one
  website: "", // This will be your Firebase URL later
  profileImage: "/assets/profile.png", // We'll add this later
};

export const profile = {
  summary: "I'm a mobile app developer with over 6 years of experience building fast, scalable, and user-focused apps using React Native and Expo. I specialize in delivering pixel-perfect UIs and seamless user experiences across platforms.",
  highlights: [
    "Build and maintain mobile apps in React Native and Expo",
    "Optimize app performance (profiling, async loading, etc.)",
    "Collaborate with cross-functional teams (design, backend, QA)",
    "Deliver bug-free releases with testing",
  ],
  openTo: "Remote work opportunities (contract or full-time)",
};

export const experience = [
  {
    company: "Realestate.com.kh",
    position: "Mobile Apps Developer (React Native)",
    location: "Phnom Penh, Cambodia",
    startDate: "07/2018",
    endDate: "08/2025", // TODO: Verify this date - conflicts with DCG
    current: false,
    achievements: [
      "Led development of core mobile features using React Native, improving app usability and client engagement",
      "Integrated REST APIs, managed complex UI states with Redux, and implemented error handling best practices",
      "Optimized mobile performance, reducing initial load times by 35% and memory usage by 25%",
      "Conducted cross-platform testing (Android/iOS) to ensure consistent experiences across devices",
      "Mentored junior developers and contributed to peer code reviews and sprint retrospectives",
      "Supported deployment pipelines and worked with PMs to deliver features on time",
    ],
  },
  {
    company: "Lamudi",
    position: "Mobile Apps Developer (React Native)",
    location: "Battambang, Cambodia",
    startDate: "08/2024",
    endDate: "08/2025", // TODO: Verify - seems to overlap with Realestate
    current: false,
    achievements: [
      "Developed and maintained high-performing features in a cross-platform mobile app using React Native + Expo",
      "Collaborated with designers and backend engineers to deliver responsive, pixel-perfect UIs",
      "Improved app performance by identifying slow renders and optimizing data flow using async strategies & profiling tools",
      "Implemented push notifications, deep linking, and advanced navigation flows across Android and iOS",
      "Performed regular QA/code reviews to ensure stability and minimize production bugs",
      "Actively contributed to release cycles",
    ],
  },
  {
    company: "DCG",
    position: "Mobile Apps Developer (React Native)",
    location: "Phnom Penh, Cambodia",
    startDate: "07/2018",
    endDate: "08/2024", // TODO: Verify - conflicts with Realestate dates
    current: false,
    achievements: [
      "Built mobile components and views using React Native with Expo, focusing on modular and reusable code",
      "Developed authentication flows, implemented user sessions, and managed secure local storage",
      "Tuned animations and transitions to improve UX consistency across platforms",
      "Assisted QA with identifying and fixing critical bugs across several device types",
      "Participated in agile development cycles and collaborated on documentation and sprint planning",
    ],
  },
  {
    company: "Codingate Co., Ltd",
    position: "Mobile Apps Developer (React Native)",
    location: "Phnom Penh, Cambodia",
    startDate: "03/2018",
    endDate: "07/2018",
    current: false,
    achievements: [
      "Helped ship the MVP version of a React Native app for a local client in under 3 months",
      "Built UI components based on Figma wireframes, ensuring brand consistency and responsiveness",
      "Wrote reusable functions and managed API integration with REST services",
      "Performed QA and manual testing across multiple device environments",
      "Contributed to early-stage planning and rapid iteration during development sprints",
    ],
  },
];

export const skills = {
  technical: [
    "React Native",
    "Expo",
    "Redux",
    "REST APIs",
    "Async Storage",
    "Push Notifications",
    "Deep Linking",
    "Git",
    "Android & iOS Testing",
    "JavaScript/TypeScript",
    "Performance Optimization",
  ],
  soft: [
    "Team Collaboration",
    "Mentoring",
    "Problem Solving",
    "Agile/Scrum",
    "Code Review",
  ],
};

export const languages = [
  { language: "English", proficiency: "Professional" },
  { language: "Khmer", proficiency: "Native" },
];

export const education = [
  {
    institution: "Korea Software HRD",
    degree: "Basic and Advanced Course",
    field: "Software Development Skills, Training Center",
    startDate: "01/2017",
    endDate: "01/2018",
  },
  {
    institution: "Build Bright University",
    degree: "Bachelor of Information Technology",
    field: "Information Technology, Computer Programming, Software Development Skills",
    startDate: "01/2013",
    endDate: "01/2017",
  },
];

export const projects = [
  // You can add notable projects here
  // {
  //   name: "Project Name",
  //   description: "Brief description",
  //   technologies: ["React Native", "Expo", "Firebase"],
  //   link: "https://github.com/...",
  // },
];

export default {
  personalInfo,
  profile,
  experience,
  skills,
  languages,
  education,
  projects,
};
