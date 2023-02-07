import React from "react";

const HorizontalCard = ({ title, imageUrl, price, rating, odaSayisi }) => {
  return (
    <div className="max-w-md w-full lg:flex">
      <img src={imageUrl} alt={title} />
      {/* <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      ></div> */}
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="flex items-center">
          {/* <img
            className="w-10 h-10 rounded-full mr-4"
            src={imageUrl}
            alt="Avatar of Jonathan Reinink"
          /> */}
          <div className="text-sm">
            <p className="text-black leading-none">{price}</p>
            <p className="text-black leading-none">{odaSayisi}</p>
            <p className="text-grey-dark">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
