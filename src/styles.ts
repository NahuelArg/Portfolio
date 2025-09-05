
interface IStyles {
    paddingX: string,
    paddingY: string,
    padding: string,
    heroHeadText: string,
    heroSubText: string,
    sectionHeadText: string,
    sectionSubText: string,
}

export const styles:IStyles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    

    heroHeadText:
        "font-black text-[#f3faf3] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] ",
    heroSubText:
        "text-[#0f2410] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
        "text-[#e4f4e4] md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
        "sm:text-[18px] text-[14px] text-[#e4f4e4] uppercase tracking-wider",
};
