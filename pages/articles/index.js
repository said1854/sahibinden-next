import React from "react";
import Layout from "../../layout/layout";

const index = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <Layout>
      <h1> Articles page!</h1>
      <ul>
        {list.map((elem) => {
          <li>
            <a> Article {elem}</a>
          </li>;
        })}
      </ul>
    </Layout>
  );
};

export default index;
