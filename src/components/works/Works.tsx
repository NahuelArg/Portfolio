
import {motion} from "framer-motion";
import {styles} from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import {projects} from "../../constants";
import {fadeIn, textVariant} from "../../utils/motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from 'react-i18next';




const Works = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>{t('works.mywork')}</p>
                <h2 className={styles.sectionHeadText}>{t('works.projects')}</h2>
            </motion.div>
            <motion.p
                className="mt-3 text-[#cae8ca] text-[17px] max-w-3xl leading-[30px]"
                variants={fadeIn("", "", 0.1, 1)}
            >
                {t('works.description')}
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </>
    )
}
const WorksSection = SectionWrapper(Works, "projects");

export default WorksSection;
