import React from "react";

export default function CardWithUtil({ card }) {
  return (
    <div className="flex flex-col pointer-events-none p-3 justify-center items-center ">
      <img className="w-full rounded-3xl " src={card.img} alt="" />
      <p className="text-3xl w-full text-center text-white bg-gray-800 mt-6">
        {card.categories}
      </p>
    </div>
  );
}
