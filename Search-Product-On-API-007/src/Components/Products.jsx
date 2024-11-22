import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ShimmerPostItem } from "react-shimmer-effects";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = `https://dummyjson.com/products`;

  const getProducts = async () => {
    try {
      const response = await axios.get(API_KEY);
      setIsLoading(false);
      setProducts(response?.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="bg-gray-50 py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product Card */}
          {isLoading ? (
            <>
              {Array.from({ length: 30 }).map(() => (
                <div className="p-6">
                  <ShimmerPostItem card title text cta imageHeight={190} Width={230} />
                </div>
              ))}
            </>
          ) : (
            products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  discountPercentage={item.discountPercentage}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })
          )}
          {/* End Product Card */}
        </div>
      </div>
    </section>
  );
}

export default Products;
