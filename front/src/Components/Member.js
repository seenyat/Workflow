import React from "react";

export default function Member({ author }) {
  return (
    <div className=" border border-black h-full w-5/6 flex flex-col justify-center items-center ">
      <img className="w-4/6 " src={`${author.img}`} alt="" />
      <div className="p-6 font-extrabold text-3xl ">{author.name}</div>
    </div>
  );
}
