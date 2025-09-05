
import  {FC} from 'react';
import {IExperience} from "../../models/constants.model";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import { useTranslation } from 'react-i18next';

interface IExperienceCardProps {
    experience: IExperience
}


const ExperienceCard: FC<IExperienceCardProps> = ({experience}) => {
    const { t } = useTranslation();
    // Try to get translation from experiences array by index
    // Fallback to experience fields if not found
    // This assumes Experience.tsx passes experiences in order
    const expList = t('experiences', { returnObjects: true }) as any[];
    const exp = expList && expList[experience.id - 1] ? expList[experience.id - 1] : experience;
    return (
        <VerticalTimelineElement
            contentStyle={{background: "transparent", boxShadow: "none", padding: 0}}
            contentArrowStyle={{borderRight: "7px solid #242424"}} date={exp.date}
            iconStyle={{background: experience.iconBg}}
        >
            <div className="w-full bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] p-[2px] rounded-[24px] shadow-card">
                <div
                    className="bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] rounded-[24px] py-10 px-20 min-h-[360px] flex justify-evenly items-center flex-col"
                >
                    <h3 className="text-[#0f2410] text-[22px] font-bold text-center">{exp.title}</h3>
                    <p className="text-[#0f2410] font-semibold !m-0">{exp.company_name}</p>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {exp.points.map((point: string, index: number) => (
                            <li key={`experience-point-${index}`} className="text-[#cae8ca] text-sm pl-1 tracking-wider">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
