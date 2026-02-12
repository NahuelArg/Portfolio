import {FC} from 'react';
import {IProject} from "../../models/constants.model";
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import {github, link} from "../../assets";
import {fadeIn} from "../../utils/motion";
import { useTranslation } from 'react-i18next';

interface IProjectCardProps  {
    project: IProject;
}

const ProjectCard: FC<IProjectCardProps> = ({project}) => {
    const {t} = useTranslation();
    const projectList = t(`projects.${project.slug}`, { returnObjects: true }) as Record<string, string>;
    
    return (
        <motion.div variants={fadeIn("up", "spring", project.id * 0.5, 0.75)}>
            <Tilt
                glareMaxOpacity={45}
                transitionSpeed={450}
                className="bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
            >
                <div className="relative w-full h-[230px]">
                    <img src={project.image} alt={projectList.name} className="w-full h-full rounded-2xl"/>
                    <div className="absolute inset-0 flex m-3 card-img_hover">
                        {project.source_code_link && (
                            <a className="black-gradient mr-auto w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                               href={project.source_code_link} target="_blank">
                                <img src={github} alt="github" className="w-3/4 h-3/4 object-contain bg-[#a1d5a0] rounded-full"/>
                            </a>
                        )}
                        {project.app_link && (
                            <a className="black-gradient ml-auto w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                               href={project.app_link} target="_blank">
                                <img src={link} alt="link" className="w-3/5 h-3/5 object-contain  bg-[#a1d5a0] rounded-full"/>
                            </a>
                        )}
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-[#cae8ca] font-bold text-xl">{projectList.name}</h3>
                    <p className="mt-2 text-[#cae8ca] text-sm">{projectList.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4">
                    {project.tags.map((tag) => (
                        <span key={`${project.slug}-${tag.name}`} className={`text-xs ${tag.color}`}>#{tag.name}</span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
