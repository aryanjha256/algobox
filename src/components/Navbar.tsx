import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div
        className="font-bold
        text-2xl"
      >
        <span
          className="
        bg-clip-text 
        text-transparent
        bg-gradient-to-r 
        from-[#C6FFDD] 
        to-[#f7797d]
      "
        >
          algo
        </span>
        box
      </div>
      <a href="https://github.com/aryanjha256/algobox" target="_blank">
        <FaGithub size={24} className="cursor-pointer" />
      </a>
    </nav>
  );
};

export default Navbar;
