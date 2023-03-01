import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = ({ title }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className="bg-gray-700 border-gray-200 px-2 py-4 sm:px-4 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto w-10/12">
          <a href="/" className="flex  items-center">
            <span className="self-center text-2xl bg-yellow-300 font-semibold whitespace-nowrap dark:text-white">
              saidinden.com
            </span>
          </a>
          <p className="text-yellow-400 border">{title}</p>

          <div className="px-4">
            <input
              className="bg-gray-800 text-gray-300 focus:bg-slate-100 focus:text-gray-800 w-72 px-4"
              type="text"
              placeholder="Kelime ile ara"
              autoComplete="off"
            />
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex text-white">
              <li className="mr-4 bg-slate-900 rounded px-4 text-slate-400">
                <button
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li className="mr-4  text-slate-400">
                <p>{theme}</p>
              </li>
              <li className="mr-4  text-slate-400">
                <Link href="login">
                  <button> Giriş Yap</button>
                </Link>
              </li>
              <li className="mr-4  text-slate-400">
                <Link href="register">
                  <button>Kayit ol</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
