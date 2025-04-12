import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MomentSlideshow = ({ images }) => {
    if (!Array.isArray(images)) {
        console.error("MomentSlideshow received non-array images:", images);
        return <div style={{ color: "#999", padding: "1rem" }}></div>;
      }
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ margin: "1rem 0", borderRadius: "1rem", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MomentSlideshow;