import { useState, useEffect } from "react";
import Logo from "../../image/logo/mhk.png";
import { navLinks } from "../../../data/navLinks";
import { Link } from "react-router-dom";

type NavlistProps = {
  className?: string; // allow custom styling
  linkClassName?: string;
};

const Navlist = ({ className, linkClassName }: NavlistProps) => {
  return (
    <nav>
      <ul className={className}>
        {navLinks.map((link) => (
          <li key={link.key} >
            <Link to={link.path} className={linkClassName}>
              {link.key.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// hamburger menu

const HamburgerMenu = () => {     
  const [isOpen, setIsOpen] = useState(false);

  //block scrolling when menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed items-center mt-2 z-40">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none "
      >
        {/* Three bars */}
        <div className="w-8 h-1 bg-black mb-1 rounded-4xl"></div>
        <div className="w-8 h-1 bg-black  mb-1 rounded-4xl"></div>
        <div className="w-8 h-1 bg-black rounded-4xl"></div>
      </button>

      {/* Menu list */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-white/70 backdrop-blur-md  flex flex-col items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            ✕
          </button>

          <div>
            <img src={Logo} className="w-40" />
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col gap-6 text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {link.key.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 flex justify-between ${scrolled ? "bg-boder/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div>
        <Link to={"/"}>
        <img src={Logo} className="w-30 cursor-pointer" />
        </Link>
        
      </div>
      <div className=" flex items-center justify-end mr-5 md:hidden">
        <HamburgerMenu />
      </div>
      <div className="hidden md:flex items-center mr-5">
        <Navlist 
        className="flex gap-5 font-semibold  "
        linkClassName={`${
        scrolled ? "text-white hover:text-secondary" : "text-black hover:text-secondary"
      }`}

        />
      </div>
    </nav>
  );
};

export default Navbar;

// on navbar create navlink same goes for
