
import {FC} from "react";
import {IService} from "../../models/constants.model";
import {motion} from "framer-motion";
import {slideIn} from "../../utils/motion";
import { useTranslation } from 'react-i18next';


const ServiceCard: FC<IService> = ({ id, title, icon }) => {
    const { t } = useTranslation();
    // Try to match translation key from title
    const key = title.toLowerCase().split(' ')[0];
    const translatedTitle = t(`services.${key}`, title);
    return (
        <motion.div
            variants={slideIn("up", "spring", 0, 2)}
            className="xs:w-[320px] w-full"
        >
            <div className="w-full bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] p-[2px] rounded-[24px] shadow-card">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-r from-[#0f2410] to-[#a1d5a0] rounded-[24px] py-10 px-20 min-h-[360px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={translatedTitle} className="w-40 h-40 object-contain" loading="lazy" />
                    <h3 className="text-[#cae8ca] text-[22px] font-bold text-center">{translatedTitle}</h3>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
