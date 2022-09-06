import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    //  autoplay: true,
  };

  return (
    <div className="relative overflow-hidden md:overflow-visible h-full">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
