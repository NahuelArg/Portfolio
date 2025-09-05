import {VerticalTimeline} from "react-vertical-timeline-component";
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experienceSection.introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('experienceSection.overview')}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(experience => (
              <ExperienceCard key={experience.id} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
const ExperienceWrapped = SectionWrapper(Experience, "work");

export default ExperienceWrapped;
