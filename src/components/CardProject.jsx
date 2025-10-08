import React from "react";

export default function CardProject({ data }) {
  return (
    <div className=" group relative bg-gray-800 h-90 w-full overflow-hidden rounded-md shadow-md/30">
      <a target="blank" href={data.url}>
        <img
          className="  object-cover h-full w-full transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-30  "
          src={data.imgUrl}
          alt=""
        />
        <div className=" pointer-events-none absolute translate-y-2  top-3/7  text-white z-10 w-full text-center  font-bold opacity-0  group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
          <h2 className="text-3xl">{data.name}</h2>
          <h3>{data.title}</h3>
        </div>
      </a>
    </div>
  );
}
