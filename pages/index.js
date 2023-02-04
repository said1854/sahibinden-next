import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

function Home() {
  const { crData, error } = useSWR("/api/staticdata", fetcher);
  console.log(crData);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-slate-200 h-screen flex">
        <Sidebar />
        <ul className="flex w-3/4 flex-wrap">
          {/* {crData.map((item, index) => {
            <li className="mx-3 my-2">
              <ProductCard key={index} title={item.title} />
            </li>;
          })} */}
          {/* {data.map((item, index) => (
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
          ))} */}
        </ul>
      </div>
    </>
  );
}

export default Home;