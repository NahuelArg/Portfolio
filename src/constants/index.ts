import {
    frontend,
    backend,
    fullstack,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    express,
    tailwind,
    nodejs,
    nestjs,
    git,
    docker,
    next,
    postgresql,
    mysql,
    firebase,
    swagger,
    jest,
    chefPortfolio,
    cashRegister,
    redux,
    prisma
} from "../assets";
import { IExperience, INavLink, IProject, IService, ITechnology } from "../models/constants.model";

export const navLinks: ReadonlyArray<INavLink> = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "projects",
        title: "Projects",
    },
];

export const services: ReadonlyArray<IService> = [
    {
        id: 1,
        title: "Fullstack Developer",
        icon: fullstack,
    },
    {
        id: 2,
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        id: 3,
        title: "Backend Developer",
        icon: backend,
    },
];

export const technologies: ReadonlyArray<ITechnology> = [
    {
        id: 1,
        name: "HTML 5",
        icon: html,
    },
    {
        id: 2,
        name: "CSS 3",
        icon: css,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: javascript,
    },
    {
        id: 4,
        name: "TypeScript",
        icon: typescript,
    },
    {
        id: 5,
        name: "React JS",
        icon: reactjs,
    },
    {
        id: 7,
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        id: 10,
        name: "Node JS",
        icon: nodejs,
    },
    {
        id: 11,
        name: "Next JS",
        icon: next,
    },

    {
        id: 13,
        name: "git",
        icon: git,
    },

    {
        id: 15,
        name: "docker",
        icon: docker,
    },
    {
        id: 16,
        name: "express",
        icon: express,
    },

    {
        id: 17,
        name: "nestjs",
        icon: nestjs,
    },

    {
        id: 18,
        name: "postgresql",
        icon: postgresql,
    },

    {
        id: 19,
        name: "mysql",
        icon: mysql,
    },

    {
        id: 20,
        name: "firebase",
        icon: firebase,
    },
    {
        id: 21,
        name: "swagger",
        icon: swagger,
    },

    {
        id: 22,
        name: "jest",
        icon: jest,
    },
    {
        id: 23,
        name: "prisma",
        icon: prisma,
    },
    {
        id: 24,
        name: "redux",
        icon: redux,
    },


];

export const experiences: ReadonlyArray<IExperience> = [
    {
        id: 1,
        title: "Full Stack Developer (Internship)",
        company_name: "IDPartners",
        iconBg: "#383E56",
        date: "Jun 2024 - Aug 2024",
        points: [
            "Process automation in Google Sheets using Google Apps Script.",
            "Creation of interactive buttons in spreadsheets that executed scripts connected to external APIs.",
            "Data validation and testing with Postman to ensure correct integration with Pipedrive (sales CRM and management software).",
            "Improved efficiency in data management and internal company workflows."
        ],
    },
    {
        id: 2,
        title: "Co-Founder & Full Stack Developer",
        company_name: "Tech Web Studio",
        iconBg: "#383E56",
        date: "July 2023 - Feb 2025",
        points: [
            "Founded a digital agency during the Henry bootcamp with two partners.",
            "Developed web projects for clients using React.js, Node.js, Express.js, and PostgreSQL.",
            "Designed and implemented custom solutions, from architecture to user interface.",
        ],
    },
    {
        id: 3,
        title: "Freelance AI Trainer",
        company_name: "Outlier AI · Freelance Platform",
        iconBg: "#383E56",
        date: "2023 -2024",
        points: [
            "Training and supervision of artificial intelligence models on the Outlier AI platform.",
            "Contributed to algorithm improvement through quality data generation and structured feedback.",
        ],
    },
];

export const projects: ReadonlyArray<IProject> = [
    {
        id: 1,
        name: "Chef Experience Portfolio",
        description:
            "Interactive portfolio for chefs, developed with React, TypeScript, Tailwind CSS, Framer Motion, and internationalization (i18n) in English and Spanish. Features a dish carousel, animations, hamburger menu, and responsive design.",
        tags: [
            { id: 1, name: "react", color: "blue-text-gradient" },
            { id: 2, name: "typescript", color: "text-blue-700" },
            { id: 3, name: "tailwind", color: "text-cyan-500" },
            { id: 4, name: "framer-motion", color: "text-pink-500" },
            { id: 5, name: "i18n", color: "text-green-600" },
        ],
        image: chefPortfolio,
        source_code_link: 'https://github.com/NahuelArg/chef-experience-portfolio',
        app_link: "https://chef-experience-portfolio.vercel.app"
    },
    {
        id: 2,
        name: "Cash Register System",
        description:"Cash register management system for retail and small businesses",
        tags: [
            { id: 1, name: "react", color: "blue-text-gradient" },
            { id: 2, name: "typescript", color: "text-blue-700" },
            { id: 3, name: "nestjs", color: "text-pink-500" },
            { id: 4, name: "mysql", color: "text-blue-500" },
            { id: 5, name: "prisma", color: "text-green-600" },
            { id: 6, name: "tailwind", color: "text-cyan-500" },
        ],
        image: cashRegister,
        source_code_link: 'https://github.com/NahuelArg/cash-register-mvp',
        app_link: "https://cash-register-mvp.vercel.app"
    }
];
