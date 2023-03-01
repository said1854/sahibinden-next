const ProductCard = ({ title, imageUrl, onClick }) => {
  return (
    <div className="w-48 truncate hover:text-clip">
      <div className="w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 flex">
          <img
            src={imageUrl}
            alt={title}
            onClick={onClick}
            width={78}
            height={104}
          />
        </div>
      </div>
      <h6 className=" tracking-tight text-gray-900 dark:text-white">{title}</h6>
    </div>
  );
};

export default ProductCard;
