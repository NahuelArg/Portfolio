import SectionWrapper from "../hoc/SectionWrapper";
import {technologies} from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(technology => (
          <div key={technology.id} className="w-28 h-28">
            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" loading="lazy" />
            <p className="text-[#cae8ca] text-[14px] font-bold text-center mt-2">{technology.name}</p>
          </div>
      ))}
    </div>
  )
}

const TechSection = SectionWrapper(Tech, "tech");
export default TechSection;
