import React from "react";
import Sidebar from "../../components/Sidebar";
import Layout from "../../layout/layout";
import { useState, useEffect } from "react";
import HorizontalCard from "../../components/HorizontalCard";
import products from "../../json/emlak.json" assert { type: "json" };

function emlak() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);

  console.log(data);

  return (
    <>
      <Layout title={"vasita"}>
        <ul className="flex w-3/4 flex-wrap">
          {data.map((item, index) => (
            <li className="mx-3 my-2">
              <HorizontalCard
                key={index}
                id={item.km}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                rating={item.m2}
                odaSayisi={item.odaSayisi}
              />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export default emlak;
