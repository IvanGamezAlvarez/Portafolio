import React from "react";

function AboutMe() {
  return (
    <>
      <div>
        <div className="bg-[url('/imgs/sky.jpg')] bg-center bg-cover p-10 bg-fixed text-white text-center">
          <h2 className=" text-4xl font-bold text-left  ">About Me:</h2>
          <img
            className=" aspect-square h-130 object-cover rounded-full m-auto  "
            src="/imgs/IvanGamez.jpg"
            alt=""
          />
          <h3 className="text-2xl font-bold m-5">Hi I'm Ivan Gamez Alvarez.</h3>
          <p className="text-xl m-5">
            I am a creative developer who likes design, interactivity and above
            all functionality. I love making things into a game.
          </p>
          <p className=" underline">Guadalajara, Jal. México.</p>
          <div className=" p-10 grid grid-cols-2 gap-5">
            <div className="bg-white text-black">
              <h3> Education:</h3>
              <p>
                Universidad Marista de Guadalajara | Bacheloran digital
                animation and videogames
              </p>
              <p>Bootcamp Generation México | Java Fullstack Developer</p>
              <h3> Cerifications:</h3>
              <ul>
                <li>React Js | CoderHouse</li>
                <li>Cybersecurity | CoderHouse</li>
                <li>Javascript | CoderHouse</li>
                <li>Web Development | CoderHouse</li>
              </ul>
            </div>
            <div className="bg-white text-black">
              <h3> Education:</h3>
              <p>
                Universidad Marista de Guadalajara | Bacheloran digital
                animation and videogames
              </p>
              <p>Bootcamp Generation México | Java Fullstack Developer</p>
              <h3> Cerifications:</h3>
              <ul>
                <li>React Js | CoderHouse</li>
                <li>Cybersecurity | CoderHouse</li>
                <li>Javascript | CoderHouse</li>
                <li>Web Development | CoderHouse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
