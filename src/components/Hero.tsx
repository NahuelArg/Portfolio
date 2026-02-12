import { styles } from "../styles"
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation();

    const cvUrl = i18n.language === 'es'
        ? 'https://github.com/NahuelArg/Portfolio/blob/main/public/CV_Nahuel_Esp.pdf'
        : 'https://github.com/NahuelArg/Portfolio/blob/main/public/CV_Nahuel_English.pdf';

    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#2b4a1d]"/>
                    <div className="w-1 sm:h-80 h-40 green-gradient "/>
                </div>
                <div className="">
                    <h1 className={`${styles.heroHeadText}`}>{t('hero.welcome')} <span
                        className="text-[#0f2410]">{t('hero.name')}</span></h1>
                        <br />
                    <p className={`${styles.heroSubText} mt-2`}>{t('hero.description')}</p>
                    <a
                        href={cvUrl}
                        download
                        className="mt-6 inline-block bg-[#0f2410] text-[#cae8ca] px-6 py-3 rounded-xl font-bold hover:bg-[#2b4a1d] transition-colors duration-300 shadow-md"
                    >
                        {t('hero.downloadCv')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
