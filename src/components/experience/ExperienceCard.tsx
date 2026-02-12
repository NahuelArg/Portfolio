
import  {FC} from 'react';
import {IExperience} from "../../models/constants.model";
import { useTranslation } from 'react-i18next';

interface IExperienceCardProps {
    experience: IExperience
}

const ExperienceCard: FC<IExperienceCardProps> = ({experience}) => {
    const { t } = useTranslation();
    const expList = t(`experiences.${experience.slug}`, { returnObjects: true }) as Record<string, any>[];
    const exp = expList &&  typeof expList === 'object' && !Array.isArray(expList) ? expList : experience;
    return (
        <div className="w-full bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] p-[2px] rounded-[24px] shadow-card">
            <div
                className="bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] rounded-[24px] py-10 px-20 min-h-[360px] flex justify-evenly items-center flex-col"
            >
                <h3 className="text-[#0f2410] text-[22px] font-bold text-center">{exp.title}</h3>
                <p className="text-[#0f2410] font-semibold !m-0">{exp.company_name}</p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {exp.points.map((point: string, index: number) => (
                        <li key={`experience-point-${experience.slug}-${index}`} className="text-[#cae8ca] text-sm pl-1 tracking-wider">{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
