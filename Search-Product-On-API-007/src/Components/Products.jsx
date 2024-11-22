import React from "react";
import ReactStars from "react-stars";

function Products() {
  return (
    <section className="bg-gray-50 py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Product Card */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="h-56 w-full">
              <a href="#">
                <img
                  className="mx-auto h-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                  alt="Product"
                />
              </a>
            </div>
            <div className="pt-6">
              {/* Discount Label */}
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Up to 35% off
                </span>

                {/* Action Buttons */}
                <button
                  type="button"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6z"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Title */}
              <a className="block text-lg font-semibold leading-tight text-gray-900">
                Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
              </a>

              {/* Ratings */}
              <div className="mt-2 flex items-center space-x-1">
                <p>
                  <ReactStars
                    count={5}
                    value={2.9}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                  />
                </p>
                <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                  5.0
                </p>
              </div>

              {/* Price and Add to Cart */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">$1,699</p>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* End Product Card */}
        </div>
      </div>
    </section>
  );
}

export default Products;
