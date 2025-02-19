import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function HomeSlider() {
  const [autoplaySpeed, setAutoplaySpeed] = useState(5000);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: autoplaySpeed,
    beforeChange: (oldIndex, newIndex) => {
      if (newIndex === 0) {
        setAutoplaySpeed(2000);
      } else {
        setAutoplaySpeed(2000);
      }
    },
    pauseOnHover: false,
  };
  const slides = [
    {
      imageSrc: "/images/slider1.jpg",
    },
    {
      imageSrc: "/images/slider2.jpg",
    },
    {
      imageSrc: "/images/slider3.jpg",
    },
  ];
  return (
    <div className="">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-item relative rounded-lg" key={index}>
            <div className="w-full relative ">
              <Image
                src={slide.imageSrc}
                alt="banner"
                width={1440}
                priority
                height={580}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
