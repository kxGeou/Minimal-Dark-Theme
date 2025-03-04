import { useState } from "react";

const frontColors = [
  "FF636F",
  "C678DD",
  "CD8643",
  "7887FF",
  "464D8A",
  "464964",
  "414141",
];

const bottomColors = [
  "E5C07B",
  "61AFEF",
  "98C379",
  "56B6C2",
  "7F848E",
  "D1D1D1",
  "131313",
];

export default function Colors() {
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);
  const [hoveredBottomIndex, setHoveredBottomIndex] = useState<any>(null);

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-[1.5rem] text-white/75 mb-[2rem]">Color palette</h2>
      <div className="flex flex-col gap-y-6">

        <div className="flex gap-4 md:gap-6">
          {frontColors.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredIndex(itemIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              
            >
              <div
                className={`absolute -top-[2.5rem] bg-[#393E5B] p-1 rounded text-white/60 text-sm transition-opacity duration-300 ${
                  hoveredIndex === itemIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                #{item}
              </div>
              <div
                className="w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: `#${item}` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 md:gap-6">
          {bottomColors.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredBottomIndex(itemIndex)}
              onMouseLeave={() => setHoveredBottomIndex(null)}
            >
              <div
                className={`absolute -top-[2.5rem] bg-[#393E5B] p-1 rounded text-white/60 text-sm transition-opacity duration-300 ${
                  hoveredBottomIndex === itemIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                #{item}
              </div>
              <div
                className="w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: `#${item}` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
