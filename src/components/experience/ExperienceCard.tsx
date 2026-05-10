
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
            <div className="bg-gradient-to-r from-[#0f2410] to-[#1e4020] rounded-[24px] overflow-hidden">

                {/* Header con métrica */}
                <div className="flex justify-between items-start px-8 pt-8 pb-5 border-b border-[rgba(111,185,112,0.12)]">
                    <div>
                        <h3 className="text-[#cae8ca] text-[20px] font-bold">{exp.title}</h3>
                        <p className="text-[#6fb970] text-sm font-semibold mt-1">{exp.company_name}</p>
                    </div>
                    {experience.metric && (
                        <div className="text-right flex-shrink-0 ml-4">
                            <div className="text-[#6fb970] text-[32px] font-black leading-none font-mono">
                                {experience.metric.value}
                            </div>
                            <div className="text-[rgba(202,232,202,0.4)] text-[10px] mt-1 whitespace-pre-line">
                                {experience.metric.label}
                            </div>
                        </div>
                    )}
                </div>

                {/* Puntos */}
                <ul className="px-8 py-6 space-y-3 list-none">
                    {exp.points.map((point: string, index: number) => (
                        <li key={`experience-point-${experience.slug}-${index}`} className="flex gap-3 text-[#cae8ca] text-sm leading-relaxed">
                            <span className="text-[#6fb970] font-bold flex-shrink-0 mt-0.5">→</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default ExperienceCard;
