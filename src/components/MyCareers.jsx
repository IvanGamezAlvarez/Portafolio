import React from "react";
import careers from "../data/careers";
import CareerCard from "./CareerCard";

export default function MyCareers() {
  careers;
  return (
    <div className="  bg-[url('/imgs/universe.jpg')] h-auto   bg-cover  bg-fixed ">
      <h2 className=" text-4xl font-bold text-left p-10 pb-5 text-white">
        My Career:
      </h2>
      <div className="pb-10">
        {careers.map((career) => {
          return <CareerCard key={career.id} data={career} />;
        })}
      </div>
    </div>
  );
}
