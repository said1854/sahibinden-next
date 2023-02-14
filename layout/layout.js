import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ThemeContext from "../context/ThemeContext";

export default function Layout({ children, title }) {
  const [theme, setTheme] = useState("light");

  const data = { theme, setTheme };

  return (
    <ThemeContext.Provider value={data}>
      <Navbar title={title} />
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </ThemeContext.Provider>
  );
}
