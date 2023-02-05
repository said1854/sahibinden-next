import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../layout/layout";

function emlak({ children }) {
  return (
    <>
      <Layout title={"Emlak"}>{children}</Layout>
    </>
  );
}

export default emlak;
