import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import product from "../../json/bentley.json";
import DetailCard from "../../components/DetailCardCar";

const Araba = ({ children }) => {
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
            imageUrl={data.url}
            price={data.price}
            year={data.year}
            km={data.km}
            color={data.color}
          />
        </li>
      </ul>
    </Layout>
  );
};

export default Araba;
