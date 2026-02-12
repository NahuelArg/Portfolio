
import {motion} from "framer-motion";
import {styles} from "../../styles";
import {technologies} from "../../constants";
import { slideIn, textVariant} from "../../utils/motion";
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
            <motion.div
                variants={slideIn("up", "spring", 0.2, 1)}
                className="mt-16"
            >
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {technologies.map(technology => (
                        <div key={technology.id} className="w-28 h-28">
                            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" loading="lazy" />
                            <p className="text-[#cae8ca] text-[14px] font-bold text-center mt-2">{technology.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
