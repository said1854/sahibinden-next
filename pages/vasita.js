import Sidebar from "../components/Sidebar";
import Layout from "../layout/layout";
import ProductCard from "../components/ProductCard";
import products from "../json/chrysler.json" assert { type: "json" };
import { useState, useEffect } from "react";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);

  console.log(data);

  return (
    <Layout title={"vasita"}>
      <ul className="flex w-3/4 flex-wrap">
        {data.map((item, index) => (
          <li className="mx-3 my-2">
            <ProductCard
              key={index}
              id={item.km}
              title={item.title}
              imageUrl={item.url}
              price={item.price}
              rating={item.year}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
};
