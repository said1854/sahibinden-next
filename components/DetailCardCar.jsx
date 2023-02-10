import React from "react";

const DetailsCard = ({
  title,
  imageUrl,
  price,
  km,
  color,
  year,
  id,
  onClick,
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src={imageUrl}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            perspiciatis quam consequuntur. At iusto iste natus nobis officiis
            nisi illum!
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="mt-2 text-sm text-gray-500">{price}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">km</dt>
              <dd className="mt-2 text-sm text-gray-500">{km} </dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Color</dt>
              <dd className="mt-2 text-sm text-gray-500">{color}</dd>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">year</dt>
              <dd className="mt-2 text-sm text-gray-500">{year}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
