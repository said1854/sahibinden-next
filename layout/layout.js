import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Navbar title={title} />
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
