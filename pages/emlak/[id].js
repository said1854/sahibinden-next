import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import product from "../../json/emlak.json";
import DetailCard from "../../components/DetailCard";
import Navbar from "../../components/Navbar";

const Ev = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  // const [emlak, setEmlak] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    product.find((p) => {
      if (p.id === id) {
        setData(p);
      }
    });
  }, []);

  return (
    <Layout>
      <ul className="flex w-full flex-wrap">
        <li className="w-full mx-3 my-2">
          <DetailCard
            key={1}
            id={id}
            title={data.title}
            imageUrl={data.imageUrl}
            price={data.price}
            rating={data.m2}
            odaSayisi={data.odaSayisi}
          />
        </li>
      </ul>
    </Layout>
  );
};

export default Ev;
