
import {FC} from "react";
import {navLinks} from "../constants";
import { useTranslation } from 'react-i18next';

interface IMenuProps {
    active: string;
    setActive: (active: string) => void;
    isMobile?: boolean;
    setToggle?: (toggle: boolean) => void;
    toggle?: boolean;
}


const Menu: FC<IMenuProps> = ({active, setActive, isMobile = false, setToggle, toggle}) => {
    const { t } = useTranslation();

    const handleActive = (title: string) => {
        setActive(title)
        if (setToggle) {
            setToggle(!toggle);
        }
    }

    return (
        <ul className={`list-none ${isMobile ? "flex justify-end items-start flex-col gap-4" : "hidden sm:flex flex-row gap-10"}`}>
            {navLinks.map(link => (
                <li key={link.id}
                    className={`${isMobile ? "font-poppins font-medium cursor-pointer text-[16px]" : " hover:text-[#0f2410] text-[18px] font-medium cursor-pointer"} ${active === link.title ? "text-[#f3faf3]" : "text-[#f3faf3] border-b-2 border-solid border-[#0f2410]"} `}
                    onClick={() => handleActive(link.title)}>
                    <a href={`#${link.id}`}>{t(`nav.${link.id}`)}</a>
                </li>
            ))}
        </ul>
    )
};

export default Menu;
