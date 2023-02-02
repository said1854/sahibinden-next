import Image from "next/Image";

const ProductCard = ({ id, title, imageUrl, price, rating }) => {
  return (
    <div>
      <div class="w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <Image src={imageUrl} alt="--" width={200} height={100} />
          <p>Rating: {rating}</p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              {price}$
            </span>
            <a
              href=""
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
