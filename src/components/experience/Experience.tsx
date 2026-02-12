import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../../styles";
import {experiences} from "../../constants";
import {textVariant} from "../../utils/motion";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const getExpDate = (experience: typeof experiences[number]) => {
    const expList = t(`experiences.${experience.slug}`, { returnObjects: true }) as Record<string, any>;
    return expList && typeof expList === 'object' && !Array.isArray(expList) ? expList.date : experience.date;
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experienceSection.introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('experienceSection.overview')}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(experience => (
              <VerticalTimelineElement
                key={experience.slug}
                contentStyle={{background: "transparent", boxShadow: "none", padding: 0}}
                contentArrowStyle={{borderRight: "7px solid #242424"}}
                date={getExpDate(experience)}
                iconStyle={{background: experience.iconBg}}
              >
                <ExperienceCard experience={experience} />
              </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
const ExperienceWrapped = SectionWrapper(Experience, "work");

export default ExperienceWrapped;
