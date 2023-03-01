import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import Layout from "../layout/layout";
import products from "../json/vitrin";
import { useRouter } from "next/router";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);
  const router = useRouter();
  return (
    <Layout title={"vitrin"} className="bg-blue-500">
      <ul className="flex w-full flex-wrap">
        {data.map((item, index) => (
          <li className="mx-3 my-2">
            <ProductCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              onClick={() => {
                router.push(`emlak/${item.href}`);
              }}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Home;