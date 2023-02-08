import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import Layout from "../layout/layout";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout>
      <ul className="flex w-full flex-wrap">
        {data.map((item, index) => (
          <li className="mx-3 my-2">
            <ProductCard
              key={index}
              id={item.id}
              title={item.title}
              imageUrl={item.thumbnail}
              price={item.price}
              rating={item.rating}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Home;