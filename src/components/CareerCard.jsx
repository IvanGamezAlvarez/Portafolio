import React from "react";
import careers from "../data/careers";

export default function CareerCard({ data }) {
  return (
    <>
      <div className=" bg-gray-200 w-9/10 m-auto text-center p-5 md:w-4/10  hover:scale-105 transition duration-250">
        <h2 className=" text-2xl font-regular pb-2">{data.career}</h2>
        <h3 className=" font-semibold text-xl">{data.place}</h3>
        <h3 className=" p-2 ">{data.date}</h3>
        <p className="px-5 text-justify-center md:px-20">{data.description}</p>
      </div>
      {careers.length != data.id + 1 && (
        <div className="h-30 w-1 bg-white m-auto"></div>
      )}
    </>
  );
}
