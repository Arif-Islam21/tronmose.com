// BootstrapCarousel.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// image import
import slide1 from "../../../assets/images/slider/homeSlider1.png";
import slide3 from "../../../assets/images/slider/homeSlider3.png";

const HomeSlider = () => {
  return (
    <Carousel className="home_slider" style={{ marginTop: "16px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
