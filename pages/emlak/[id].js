import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import product from "../../json/emlak.json";
import HorizontalCard from "../../components/HorizontalCard";

const Ev = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  // const [emlak, setEmlak] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(
      product.find((p) => {
        p.id === id;
      })
    );
  }, []);
  console.log(data);

  return (
    <Layout>
      <ul className="flex w-full flex-wrap">
        <li className="w-full mx-3 my-2">
          <HorizontalCard
            key={1}
            id={id}
            // title={data.title}
            // imageUrl={data.url}
            // price={data.price}
            // rating={data.year}
          />
        </li>
      </ul>
    </Layout>
  );
};

export default Ev;
