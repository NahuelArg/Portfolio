import {
    javascript,
    typescript,
    reactjs,
    express,
    tailwind,
    nodejs,
    nestjs,
    git,
    docker,
    postgresql,
    mysql,
    swagger,
    prisma,
    zustand,
    supabase,
    githubIcon,
    vercel,
    render,
    railway,
    postman,
    jwt,
    googleappsscript,
    chefPortfolio,
    cashRegister,
    shiftManagement,
} from "../assets";
import { IExperience, INavLink, IProject, ITechnology } from "../models/constants.model";

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

export const technologies: ReadonlyArray<ITechnology> = [
    // Backend
    { id: 1, name: "NestJS", icon: nestjs },
    { id: 2, name: "Node.js", icon: nodejs },
    { id: 3, name: "Prisma", icon: prisma },
    { id: 4, name: "Express", icon: express },
    { id: 5, name: "JWT", icon: jwt },
    { id: 6, name: "Google Apps Script", icon: googleappsscript },
    // Frontend
    { id: 7, name: "React", icon: reactjs },
    { id: 8, name: "TypeScript", icon: typescript },
    { id: 9, name: "JavaScript", icon: javascript },
    { id: 10, name: "Tailwind CSS", icon: tailwind },
    { id: 11, name: "Zustand", icon: zustand },
    // Database
    { id: 12, name: "PostgreSQL", icon: postgresql },
    { id: 13, name: "MySQL", icon: mysql },
    { id: 14, name: "Supabase", icon: supabase },
    // DevOps & Tools
    { id: 15, name: "Git", icon: git },
    { id: 16, name: "GitHub", icon: githubIcon },
    { id: 17, name: "Vercel", icon: vercel },
    { id: 18, name: "Render", icon: render },
    { id: 19, name: "Railway", icon: railway },
    { id: 20, name: "Docker", icon: docker },
    { id: 21, name: "Swagger", icon: swagger },
    { id: 22, name: "Postman", icon: postman },
];

export const experiences: ReadonlyArray<IExperience> = [
    {
        slug: "idParterns",
        id: 1,
        title: "Developer",
        company_name: "IdParterns",
        iconBg: "#383E56",
        date: "Oct 2024 - Dec 2024",
        points: [
            "Reduced ~3 daily hours of manual work for the sales team through bidirectional Google Sheets ↔ Pipedrive CRM integration for Aguartec (aquaculture sector).",
            "Implemented automation scripts with Google Apps Script that synchronize products, pricing and deals at scale via Pipedrive API.",
            "Developed data validation and robust error handling to ensure integrity in concurrent multi-product updates.",
            "Configured real-time synchronization through polling and automatic triggers, eliminating data inconsistencies between systems.",
        ],
    },
    {
        slug: "freelanceWebDev",
        id: 2,
        title: "Freelance Web Developer",
        company_name: "Self-Employed | Client: Chef Jon Argañaraz",
        iconBg: "#383E56",
        date: "Dec 2025 - Jan 2026",
        points: [
            "Built professional landing page with React, TypeScript, TailwindCSS and Framer Motion. Mobile-first responsive design with performance <2s.",
            "Managed full project lifecycle from initial brief to Vercel deployment, working directly with client.",
        ],
    },
    {
        slug: "hospitality",
        id: 3,
        title: "Hospitality Sector",
        company_name: "Various Employers",
        iconBg: "#383E56",
        date: "2014 - 2024",
        points: [
            "10 years developing transferable skills: management under pressure, multitasking, rapid problem-solving and attention to detail.",
        ],
    },
];

export const projects: ReadonlyArray<IProject> = [
    {
        slug: "chefExperiencePortfolio",
        id: 1,
        name: "Chef Experience Portfolio",
        description: "Professional landing page for chefs built with React, TypeScript, TailwindCSS and Framer Motion.",
        tags: [
            { id: 1, name: "react", color: "blue-text-gradient" },
            { id: 2, name: "typescript", color: "text-blue-700" },
            { id: 3, name: "tailwind", color: "text-cyan-500" },
            { id: 4, name: "framer-motion", color: "text-pink-500" },
            { id: 5, name: "i18n", color: "text-green-600" },
        ],
        image: chefPortfolio,
        source_code_link: 'https://github.com/NahuelArg/chef-experience-portfolio',
        app_link: "https://chef-experience-portfolio-nahuelargs-projects.vercel.app"
    },
    {
        slug: "cashRegisterSystem",
        id: 2,
        name: "Cash Register System",
        description: "Cash register system for small businesses with atomic transactions.",
        tags: [
            { id: 1, name: "react", color: "blue-text-gradient" },
            { id: 2, name: "typescript", color: "text-blue-700" },
            { id: 3, name: "nestjs", color: "text-pink-500" },
            { id: 4, name: "mysql", color: "text-blue-500" },
            { id: 5, name: "prisma", color: "text-green-600" },
            { id: 6, name: "zustand", color: "text-purple-500" },
        ],
        image: cashRegister,
        source_code_link: 'https://github.com/NahuelArg/cash-register-mvp',
        app_link: "https://cash-register-mvp.vercel.app"
    },
    {
        slug: "shiftManagementSystem",
        id: 3,
        name: "Shift Management System",
        description: "Appointment management system with conflict detection and RBAC.",
        tags: [
            { id: 1, name: "nestjs", color: "text-pink-500" },
            { id: 2, name: "prisma", color: "text-green-600" },
            { id: 3, name: "postgresql", color: "text-blue-500" },
            { id: 4, name: "react", color: "blue-text-gradient" },
            { id: 5, name: "typescript", color: "text-blue-700" },
            { id: 6, name: "jwt", color: "text-yellow-500" },
        ],
        image: shiftManagement,
        source_code_link: "https://github.com/NahuelArg/shift-management",
        app_link: "https://shift-management-livid.vercel.app"
    },
    // Countries Info App - uncomment when screenshot is available
    // {
    //     id: 4,
    //     name: "Countries Info App",
    //     description: "Express.js backend as proxy/aggregator for external APIs with Chart.js visualization.",
    //     tags: [
    //         { id: 1, name: "express", color: "text-gray-400" },
    //         { id: 2, name: "react", color: "blue-text-gradient" },
    //         { id: 3, name: "javascript", color: "text-yellow-500" },
    //         { id: 4, name: "chart.js", color: "text-pink-500" },
    //     ],
    //     image: countriesInfo,
    //     source_code_link: "https://github.com/NahuelArg/Countries",
    //     app_link: ""
    // },
];
