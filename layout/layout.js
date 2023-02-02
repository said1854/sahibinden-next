import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Navbar title={title} />
      <main>{children}</main>
    </div>
  );
}
