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
          <h3 className="text-2xl font-bold m-5">
            Hi, I'm Ivan Gamez Alvarez.
          </h3>
          <p className="text-xl m-5">
            I am a creative developer who likes design, interactivity and above
            all functionality. I love making things into a game.
          </p>
          <p className=" underline">Guadalajara, Jal. México.</p>
          <div className=" p-10 grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <div className="bg-white text-black py-3 px-5">
              <h3 className=" font-semibold m-3  text-xl"> Education:</h3>
              <p>
                Universidad Marista de Guadalajara | Bacheloran digital
                animation and videogames
              </p>
              <p>Bootcamp Generation México | Java Fullstack Developer</p>
              <h3 className=" font-semibold m-3 text-xl"> Cerifications:</h3>
              <ul>
                <li>React Js | CoderHouse</li>
                <li>Cybersecurity | CoderHouse</li>
                <li>Javascript | CoderHouse</li>
                <li>Web Development | CoderHouse</li>
              </ul>
            </div>
            <div className="bg-white text-black py-3 px-5 h-full">
              <h3 className=" font-semibold m-3 text-xl"> Contact me:</h3>

              <p className="block">Email: thecubeg@gmail.com</p>
              <p className="block">Phone: +52 3329885858</p>
              <h3 className="mt-4 font-semibold">My links:</h3>
              <div className=" grid grid-cols-2 justify-center text-center text-white  h-40 p-5 ">
                <button className="h-auto block bg-emerald-600  hover:bg-emerald-400">
                  <a
                    className="   "
                    target="blank"
                    href="https://wa.me/523329885858?text=Hello%2C%20I%27m%20interested%20in%20your%20profile%20as%20a%20programmer."
                  >
                    Whatsapp
                  </a>
                </button>
                <button className="h-auto block bg-blue-500 hover:bg-blue-400">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/ivangamezdev/"
                  >
                    Linkedin
                  </a>
                </button>
                <button className="h-auto block  bg-purple-700 hover:bg-purple-400 ">
                  <a target="blank" href="https://github.com/IvanGamezAlvarez">
                    Github
                  </a>
                </button>
                <button className="h-auto block bg-orange-500 hover:bg-orange-300">
                  <a target="blank" href="https://ivangamezdev.itch.io/">
                    Itch.io
                  </a>
                </button>
              </div>
            </div>
          </div>
          <a
            href="Resume.pdf"
            download
            className=" font-medium bg-white text-black  pointer cursor-pointer    m-auto w-3/6 md:w-2/8  h-10 flex  items-center justify-center hover:bg-amber-200 hover:scale-105 transition-all duration-300  "
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
