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
    postman,
    jwt,
    googleappsscript,
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
    // Backend · Core
    { id: 1,  name: "NestJS",             icon: nestjs,           category: "Backend · Core" },
    { id: 2,  name: "Node.js",            icon: nodejs,           category: "Backend · Core" },
    { id: 3,  name: "TypeScript",         icon: typescript,       category: "Backend · Core" },
    { id: 4,  name: "Express",            icon: express,          category: "Backend · Core" },
    { id: 5,  name: "JWT",                icon: jwt,              category: "Backend · Core" },
    { id: 6,  name: "Google Apps Script", icon: googleappsscript, category: "Backend · Core" },
    // Database & ORM
    { id: 7,  name: "Prisma",      icon: prisma,      category: "Database & ORM" },
    { id: 8,  name: "PostgreSQL",  icon: postgresql,  category: "Database & ORM" },
    { id: 9,  name: "MySQL",       icon: mysql,       category: "Database & ORM" },
    { id: 10, name: "Supabase",    icon: supabase,    category: "Database & ORM" },
    // Frontend
    { id: 11, name: "React",        icon: reactjs,     category: "Frontend" },
    { id: 12, name: "JavaScript",   icon: javascript,  category: "Frontend" },
    { id: 13, name: "Tailwind CSS", icon: tailwind,    category: "Frontend" },
    { id: 14, name: "Zustand",      icon: zustand,     category: "Frontend" },
    // DevOps & Tools
    { id: 15, name: "Git",     icon: git,       category: "DevOps & Tools" },
    { id: 16, name: "GitHub",  icon: githubIcon, category: "DevOps & Tools" },
    { id: 17, name: "Docker",  icon: docker,    category: "DevOps & Tools" },
    { id: 18, name: "Vercel",  icon: vercel,    category: "DevOps & Tools" },
    { id: 20, name: "Swagger", icon: swagger,   category: "DevOps & Tools" },
    { id: 21, name: "Postman", icon: postman,   category: "DevOps & Tools" },
    { id: 22, name: "Render",  icon: render,    category: "DevOps & Tools" },
];

export const experiences: ReadonlyArray<IExperience> = [
    {
        slug: "idPartners",
        id: 1,
        title: "Backend Developer (internship)",
        company_name: "IdPartners · On-site, Mendoza (Argentina)",
        iconBg: "#383E56",
        date: "Oct 2024 - Dec 2024",
        points: [
            "Cut ~3 hours of daily manual work for the sales team with a bidirectional Google Sheets ↔ Pipedrive CRM integration (client Aguartec, aquaculture sector).",
            "Explored the Pipedrive REST API endpoints with Postman and automated product, price and deal sync with Google Apps Script, removing manual data entry.",
            "Ensured data integrity during concurrent updates with validation and error handling.",
        ],
        metric: { value: "−3h", label: "manual work\nremoved / day" },
    },
    {
        slug: "henryTA",
        id: 2,
        title: "Student Teaching Assistant",
        company_name: "Henry · Argentina (part-time)",
        iconBg: "#383E56",
        date: "May 2024 - Nov 2024",
        points: [
            "Helped students from later cohorts solve problems and debug code in one-on-one and group sessions.",
            "Explained concepts such as React components, Node.js middlewares and data modeling with Sequelize and MongoDB.",
        ],
    },
    {
        slug: "hospitality",
        id: 3,
        title: "Hospitality & customer service",
        company_name: "Argentina and Spain",
        iconBg: "#383E56",
        date: "~10 years - Present",
        points: [
            "My projects (bookings, shifts, cash control) solve problems I lived first-hand in 10 years of hospitality.",
        ],
    },
];

export const projects: ReadonlyArray<IProject> = [
    {
        slug: "cashRegisterSystem",
        id: 1,
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
        id: 2,
        name: "Shift Management System",
        description: "Multi-tenant booking SaaS with conflict detection, RBAC, ~220 tests and CI.",
        tags: [
            { id: 1, name: "nestjs", color: "text-pink-500" },
            { id: 2, name: "prisma", color: "text-green-600" },
            { id: 3, name: "postgresql", color: "text-blue-500" },
            { id: 4, name: "react", color: "blue-text-gradient" },
            { id: 5, name: "typescript", color: "text-blue-700" },
            { id: 6, name: "jwt", color: "text-yellow-500" },
            { id: 7, name: "jest", color: "text-red-400" },
            { id: 8, name: "github-actions", color: "text-gray-300" },
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
