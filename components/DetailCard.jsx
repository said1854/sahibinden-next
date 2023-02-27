import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import location from "../json/locations";
import product from "../json/emlak.json";

const DetailsCard = ({
  title,
  imageUrl,
  price,
  rating,
  odaSayisi,
  id,
  onClick,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    product.find((p) => {
      if (p.id === id) {
        setData(p);
      }
    });
  }, []);

  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src={data.imageUrl}
            alt="--"
            className="rounded-lg bg-gray-100 w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title || data.title}
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            perspiciatis quam consequuntur. At iusto iste natus nobis officiis
            nisi illum!
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {price || data.price}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Oda Sayısı</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {odaSayisi || data.odaSayisi}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">m2</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {rating || data.rating}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">id</dt>
              <dd className="mt-2 text-sm text-gray-500">{id || data.id}</dd>
            </div>
          </dl>
        </div>
      </div>
      <MapComponent
        lat={location[randomNumber].lat}
        lng={location[randomNumber].lng}
      />
    </div>
  );
};

export default DetailsCard;
