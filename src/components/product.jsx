import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="w-[500px] flex gap-10">
      {products.length > 0 ? (
        <Carousel leftControl={null} rightControl="">
          {groupedProducts.map((group, index) => (
            <div key={index} className="flex justify-center gap-4 w-[500px]">
              {group.map((product, index2) => (
                <div key={index2} className="w-1/4">
                  <img
                    className="w-full h-40 object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="mt-4 text-center">
                    <h2 className="font-bold text-lg">{product.title}</h2>
                    <p className="text-gray-700">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductsCarousel;
