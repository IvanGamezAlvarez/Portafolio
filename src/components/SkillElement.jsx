import React, { useEffect, useRef } from "react";

function SkillElement({ data }) {
  const divRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (divRef.current) {
        const showColor = Math.random() > 0.5;

        divRef.current.style.boxShadow = showColor
          ? `0 0 20px ${data.backgroundColor}`
          : "none";
      }
    }, 500 + Math.random() * 500);

    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, [data.backgroundColor]);

  return (
    <div
      ref={divRef}
      className="shadow-lg border-1 h-full border-white aspect-square rounded-full flex items-center justify-center transition-all duration-300 bg-white  "
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = data.backgroundColor)
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
    >
      <h2 className="text-white text-2xl font-semibold text-center">
        {data.name}
      </h2>
    </div>
  );
}

export default SkillElement;
