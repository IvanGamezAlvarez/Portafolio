import React from "react";
import skills from "../data/skills";
import SkillElement from "./SkillElement";
function Skills() {
  return (
    <div className=" bg-gray-950">
      <h2 className=" text-4xl font-bold text-left p-10 pb-5 text-white">
        Skills:
      </h2>

      <div className=" h-auto grid grid-cols-2 gap-1 mx-10 py-10 md:grid-cols-5  md:mx-20 lg:grid-cols-9 lg:mx-30">
        {skills.map((skill) => {
          return <SkillElement key={skill.id} data={skill} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
