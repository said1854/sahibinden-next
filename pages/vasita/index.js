import Sidebar from "../../components/Sidebar";
import Layout from "../../layout/layout";
import HorizontalCard from "../../components/HorizontalCard";
import products from "../../json/bentley.json" assert { type: "json" };
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);

  const router = useRouter();

  return (
    <Layout title={"vasita"}>
      <ul className="flex w-full flex-wrap">
        {data.map((item, index) => (
          <li className="w-full mx-3 my-2">
            <HorizontalCard
              key={index}
              id={item.id}
              title={item.title}
              imageUrl={item.url}
              price={item.price}
              rating={item.year}
              onClick={() => {
                router.push(`vasita/${item.id}`);
              }}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
};
