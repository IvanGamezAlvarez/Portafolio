import React from "react";

export default function CardProject(data) {
  console.log(data.data.imgUrl);
  return (
    <div className=" bg-gray-800 h-90 w-full overflow-hidden rounded-md">
      <img
        className="object-cover h-full w-full "
        src={data.data.imgUrl}
        alt=""
      />
    </div>
  );
}
