import { Link } from "react-router-dom";
import Container from "../Container/Container";

import Logo from "../../../assets/Logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full ${
        scrolling ? "bg-white z-10" : "bg-transparent"
      } duration-200`}
    >
      <div className="navbar max-w-[1520px] px-5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Menu */}
            <div
              className={`${
                open ? "top-12 lg:hidden" : "-top-[500px]"
              } bg-white rounded px-8 py-10 shadow-2xl border text-lg absolute z-10 transition-all duration-500`}
            >
              <ul className="w-48 h-52 flex flex-col justify-between items-center">
                <li className="group w-full">
                  <Link>
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link>
                    College
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link>
                    Admission
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
                  </Link>
                </li>
                <li className="group w-full">
                  <Link>
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Mobile Menu END */}
          </div>
          <Link>
            <img className="max-h-20" src={Logo} alt="Univista Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            <li className="group">
              <Link>
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link>
                College
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link>
                Admission
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
              </Link>
            </li>
            <li className="group">
              <Link>
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="border-2 border-gray-800 px-10 py-3 font-semibold hover:bg-gray-800 hover:text-white hover:outline-2 hover:-outline-offset-8 outline-white outline rounded-md duration-300 hover:rounded-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
