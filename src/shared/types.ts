export enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "services",
  Skills = "skills",
  ContactUs = "contactus",
};

export enum AllSkills {
  OperatingSystem = "Operating System",
  ProgrammingLanguage = "Programming Language",
  Framework = "Framework",
}

export interface SkillProficiency {
  [skill: string]: number;
}

export const SkillProficiencies: Record<AllSkills, SkillProficiency> = {
  [AllSkills.OperatingSystem]: {
    "Archlinux": 80,
    "Ubuntu": 72,
    "Windows": 67,
    "CentOS": 45,
  },
  [AllSkills.ProgrammingLanguage]: {
    "HTML": 97,
    "Python": 90,
    "JavaScript": 83,
    "PHP": 73,
    "NodeJS": 69,
    "Java": 60,
  },
  [AllSkills.Framework]: {
    "Selenium": 82,
    "Scrapy": 84,
    "React": 78,
    "Django": 62,
  }
}
