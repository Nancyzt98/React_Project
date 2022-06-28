import React from "react";
import "./Slider.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "./Card";
const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div id="main-slider-container">
      <ChevronLeftIcon className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {props.slides.map((slide, index) => {
          return <Card key={slide.name} user={slide} />;
        })}
      </div>
      <ChevronRightIcon className="slider-icon right" onClick={slideRight} />
    </div>
  );
};
export default ReactCardSlider;
