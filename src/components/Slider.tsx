import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoPython,
} from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

const Slider = () => {
  const iconsArray = [
    { icon: <BiLogoJavascript size={40} />, name: "JavaScript" },
    { icon: <BiLogoPython size={40} />, name: "Python" },
    { icon: <FaRust size={40} />, name: "Rust" },
    { icon: <BiLogoCPlusPlus size={40} />, name: "C++" },
    { icon: <BiLogoCss3 size={40} />, name: "CSS" },
    { icon: <FaGolang size={40} />, name: "Go" },
    { icon: <DiDart size={40} />, name: "Dart" },
  ];

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex bg-zinc-700  border-zinc-600 p-4  border rounded-lg">
        {iconsArray.map((item, index) => (
          <div key={index} className="group relative">
            <div className=" flex items-center justify-center px-8 duration-150 cursor-pointer group-hover:px-12">
              {/* Icon */}
              <div className="transform transition-all duration-150 group-hover:scale-150 ">
                {item.icon}
              </div>

              {/* Name */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm whitespace-nowrap">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
