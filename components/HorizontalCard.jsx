import React from "react";

const HorizontalCard = ({
  title,
  imageUrl,
  price,
  rating,
  odaSayisi,
  id,
  onClick,
}) => {
  return (
    <div className="w-full flex">
      <img src={imageUrl} alt={title} width={100} height={20} />

      <div className="w-full border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold mb-2">{title}</div>
        </div>
        <div className="flex items-center px-2">
          <div className="text-sm mx-2">
            <p className="text-grey-dark">{rating}</p>
          </div>
          <div className="text-sm mx-2">
            <p className="text-black leading-none">{price}</p>
          </div>
          <div className="text-sm mx-2">
            <p className="text-black leading-none">{odaSayisi}</p>
          </div>
          <div className="text-sm mx-2">
            <p className="text-black leading-none">id: {id}</p>
          </div>
          <button className="border px-4 py-1 bg-slate-400" onClick={onClick}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
