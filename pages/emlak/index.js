import React from "react";
import Sidebar from "../../components/Sidebar";
import Layout from "../../layout/layout";
import { useState, useEffect } from "react";
import HorizontalCard from "../../components/HorizontalCard";
import products from "../../json/emlak.json" assert { type: "json" };
import { useRouter } from "next/router";
import Filter from "../../components/Filter";

function emlak() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);

  const router = useRouter();
  const id = router.query;

  return (
    <>
      <Layout title={"vasita"}>
        <Filter />
        <ul className="flex w-full flex-wrap">
          {data.map((item, index) => (
            <li className="mx-3 my-2 w-full">
              <HorizontalCard
                key={index}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                rating={item.m2}
                odaSayisi={item.odaSayisi}
                onClick={() => {
                  router.push(`emlak/${item.id}`);
                }}
                style={{ cursor: "pointer" }}
              />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export default emlak;
