import {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {styles} from "../styles";
import {Link} from "react-router-dom";
import {close, menu, mLogo} from "../assets";
import Menu from './Menu';


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const { i18n } = useTranslation();

    const handleScroll = () => {
        setActive("");
        window.scroll(0, 0);
    }

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-[#6fb970] border-b-[2px] border-[#cae8ca]`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={handleScroll}>
                    <img src={mLogo} alt="logo" className="w-11 h-11 object-contain"/>
                    <p className="text-[#f3faf3] text-[18px] font-bold cursor-pointer flex">Nahuel&nbsp;
                        <span className="sm:block hidden">| Carvajal</span>
                    </p>
                </Link>
                <Menu active={active} setActive={setActive}/>
                <div className="flex items-center gap-4">
                    <button
                        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-[#cae8ca] text-[#0f2410]' : 'bg-transparent text-[#f3faf3] border border-[#cae8ca]'}`}
                        onClick={() => handleLanguageChange('en')}
                    >EN</button>
                    <button
                        className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-[#cae8ca] text-[#0f2410]' : 'bg-transparent text-[#f3faf3] border border-[#cae8ca]'}`}
                        onClick={() => handleLanguageChange('es')}
                    >ES</button>
                </div>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt={toggle ? "close" : "menu"}
                         className="w-[28px] h-[28px] object-contain cursor-pointer"
                         onClick={() => setToggle(!toggle)}/>
                    {toggle && (
                        <div
                            className={`p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${!toggle ? "hidden" : "flex"}`}>
                            <Menu active={active} setActive={setActive} isMobile setToggle={setToggle} toggle={toggle}/>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
