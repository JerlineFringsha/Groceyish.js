import PropTypes from "prop-types";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Caurosel = ({ slides, dataSet }) => {
  let [curr, setCurr] = useState(3);

  let prevSlide = () => {
    setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  };

  let nextSlide = () => {
    setCurr(curr === slides.length - 1 ? 0 : curr + 1);
  };

  return (
    <div className="relative w-full  h-screen overflow-hidden bg-custom-image">
    
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            src={slide}
            alt={`slide-${index}`}
            key={index}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-4xl font-bold">{dataSet[curr].header}</h1>
        <p className="text-xl">{dataSet[curr].text}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 text-white px-10 text-3xl">
        <button onClick={prevSlide}>
          <BsFillArrowLeftCircleFill className="text-black text-4xl" />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill className="text-black text-4xl" />
        </button>
      </div>

      {/* Dots for Slide Navigation */}
      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full z-10">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className={`rounded-full w-3 h-3 cursor-pointer ${
              i === curr ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

Caurosel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSet: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Caurosel;
