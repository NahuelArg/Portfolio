
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
            <motion.p variants={slideIn("up", "spring", 0.15, 1)}
                      className="mt-4 text-[#cae8ca] text-[15px] max-w-3xl">
                <span className="text-[#6fb970] font-mono text-xs uppercase tracking-widest mr-2">
                    {t('about.languagesLabel')}
                </span>
                {t('about.languages')}{' '}
                <a
                    href="https://cert.efset.org/en/GvvoUw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6fb970] underline underline-offset-4 hover:text-[#cae8ca]"
                >
                    {t('about.certLink')}
                </a>
            </motion.p>
            <motion.div
                variants={slideIn("up", "spring", 0.2, 1)}
                className="mt-16"
            >
                {(() => {
                    const categories = ["Backend · Core", "Database & ORM", "Frontend", "DevOps & Tools"];
                    return categories.map(cat => {
                        const techs = technologies.filter(t => t.category === cat);
                        return (
                            <div key={cat} className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[#6fb970] text-xs font-bold uppercase tracking-widest font-mono">
                                        {cat}
                                    </span>
                                    <div className="flex-1 h-px bg-[rgba(202,232,202,0.15)]" />
                                </div>
                                <div className="flex flex-row flex-wrap gap-3">
                                    {techs.map(technology => (
                                        <div
                                            key={technology.id}
                                            className="flex items-center gap-2 bg-[rgba(111,185,112,0.08)] border border-[rgba(111,185,112,0.2)] rounded-lg px-3 py-2"
                                        >
                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-5 h-5 object-contain"
                                                loading="lazy"
                                            />
                                            <span className="text-[#cae8ca] text-sm font-medium">{technology.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    });
                })()}
            </motion.div>
        </>
    )
}

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
