
export interface INavLink {
    id: string;
    title: string;
}
export interface IService {
    id: number;
    title: string;
    icon: string;
}

export interface IExperience {
    slug: string;
    id: number;
    title: string;
    company_name: string;
    iconBg: string;
    date: string;
    points: string[];
}

export interface ITechnology {
    id: number;
    name: string;
    icon: string;
}

export interface IProject {
    slug: string;
    id: number;
    name: string;
    description: string;
    tags: {
        id: number,
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    app_link?: string;
}
