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
      <FaGithub size={24} className="cursor-pointer" />
    </nav>
  );
};

export default Navbar;
