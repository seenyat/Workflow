import React from "react";
import { Link } from "react-router-dom";
import Cardslist from "../Utils/Cardslist";

export default function Stack() {
  return (
    <div className="flex w-full h-full relative flex-col ">
      <Link to="/about">
        <div className="w-full h-20 shadow-md absolute hover:bg-gray-100 z-20 text-3xl flex justify-center items-center outline-none">
          Перейти к команде
        </div>
      </Link>
      <Cardslist />
    </div>
  );
}
