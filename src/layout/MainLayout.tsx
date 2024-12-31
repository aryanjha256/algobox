import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <header>
      <Navbar />
      <div className="text-center mt-12">
        <div className="font-bold text-3xl">
          just
          <span
            className="text-4xl
        bg-clip-text 
        text-transparent
        bg-gradient-to-r 
        from-[#C6FFDD] 
        to-[#f7797d]
        "
          >
            {" "}
            2{" "}
          </span>
          shortcuts away...
        </div>
        <p className="font-light">A collection of shortcodes for developers.</p>
      </div>
    </header>
  );
};

export default MainLayout;
