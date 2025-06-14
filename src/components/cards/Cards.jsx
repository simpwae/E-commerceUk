import React from "react";

function Cards() {
  const products = [
    {
      name: "Bag",
      price: 300,
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "Shoes",
      price: 120,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Watch",
      price: 250,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Hat",
      price: 50,
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="w-screen min-h-screen p-10 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-gray-300 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl p-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl flex flex-col items-center justify-between shadow-2xl transition-transform hover:scale-105 duration-200"
          >
            <img
              className="mb-3 w-full h-32 sm:h-40 object-cover rounded-xl shadow"
              src={product.img}
              alt={product.name}
            />
            <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
            <span className="text-indigo-700 font-semibold text-lg mt-1 mb-2">
              ${product.price}
            </span>
            <button className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-105 transition-all duration-200">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
