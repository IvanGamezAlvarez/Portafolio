import React from "react";
import projects from "../data/projects";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <>
      <h2 className=" text-4xl font-bold text-left m-10">Projects:</h2>
      <div className=" h-auto grid grid-cols-3 gap-5 mx-30 my-10">
        {projects.map((project) => {
          return <CardProject key={project.id} data={project} />;
        })}
      </div>
    </>
  );
}
