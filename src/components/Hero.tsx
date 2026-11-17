import { styles } from "../styles"
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation();

    const cvUrl = i18n.language === 'es'
        ? '/CV_Nahuel_Arganaraz_ES.pdf'
        : '/CV_Nahuel_Arganaraz_EN.pdf';

    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

                {/* Accent line */}
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#2b4a1d]"/>
                    <div className="w-1 sm:h-80 h-40 green-gradient"/>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="text-[#6fb970] text-xs font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6fb970] inline-block"/>
                        {t('hero.badge')}
                    </p>

                    <h1 className={styles.heroHeadText}>
                        {t('hero.welcome')}{' '}
                        <span className="text-[#6fb970]">{t('hero.name')}</span>
                    </h1>

                    {/* Specialization pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {(t('hero.pills', { returnObjects: true }) as string[]).map((pill, i) => (
                            <span key={i} className="flex items-center gap-1.5 bg-[rgba(111,185,112,0.1)] border border-[rgba(111,185,112,0.25)] rounded-full px-3 py-1 text-[#cae8ca] text-xs font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6fb970] flex-shrink-0"/>
                                {pill}
                            </span>
                        ))}
                    </div>

                    <p className={`${styles.heroSubText} mt-4 max-w-lg`}>
                        {t('hero.description')}
                    </p>

                    {/* CTAs */}
                    <div className="flex gap-3 mt-6 flex-wrap">
                        <a
                            href={cvUrl}
                            download
                            className="bg-[#6fb970] text-[#0f2410] px-6 py-3 rounded-xl font-bold hover:bg-[#cae8ca] transition-colors duration-300 shadow-md text-sm"
                        >
                            {t('hero.downloadCv')}
                        </a>
                        <a
                            href="#projects"
                            className="border-2 border-[#6fb970] text-[#6fb970] px-6 py-3 rounded-xl font-semibold hover:bg-[rgba(111,185,112,0.1)] transition-colors duration-300 text-sm"
                        >
                            {t('hero.cta2')}
                        </a>
                    </div>
                </div>

                {/* Metric bubble — desktop only */}
                <div className="hidden lg:flex flex-col items-center text-center bg-[rgba(111,185,112,0.08)] border border-[rgba(111,185,112,0.2)] rounded-2xl p-5 mt-5 flex-shrink-0 min-w-[120px]">
                    <span className="text-[#6fb970] text-4xl font-black font-mono leading-none">−3h</span>
                    <span className="text-[rgba(202,232,202,0.6)] text-[10px] mt-2 leading-snug whitespace-pre-line">{t('hero.metricLabel')}</span>
                </div>

            </div>
        </section>
    )
}

export default Hero
