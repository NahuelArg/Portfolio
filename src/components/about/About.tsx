
import {motion} from "framer-motion";
import {styles} from "../../styles";
import {services} from "../../constants";
import { slideIn, textVariant} from "../../utils/motion";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../../hoc/SectionWrapper"
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>{t('about.introduction')}</p>
                <h2 className={styles.sectionHeadText}>{t('about.overview')}</h2>
            </motion.div>
            <motion.p variants={slideIn("up", "spring", 0.1, 1)}
                      className="mt-4 text-[#cae8ca] text-[17px] max-w-3xl leading-[30px]">
                {t('about.description')}
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service) => (
                    <ServiceCard key={service.id} id={service.id} title={t(`${service.title}`)} icon={service.icon}/>
                ))}
            </div>
        </>
    )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
