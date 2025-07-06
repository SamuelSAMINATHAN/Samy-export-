import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "/spice.png",
    titleKey: "carousel_slide1_title",
    subtitleKey: "carousel_slide1_subtitle",
    ctaKey: "carousel_slide1_cta",
    link: "/notre-histoire",
  },
  {
    image: "/oil.jpeg",
    titleKey: "carousel_slide2_title",
    subtitleKey: "carousel_slide2_subtitle",
    ctaKey: "carousel_slide2_cta",
    link: "/produits",
  },
  {
    image: "/paysage.jpg",
    titleKey: "carousel_slide3_title",
    subtitleKey: "carousel_slide3_subtitle",
    ctaKey: "carousel_slide3_cta",
    link: "/exports",
  },
];

export default function HeroCarousel() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative" aria-label="Hero Carousel">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[80vh] w-full">
            <img
              src={slide.image}
              alt={t(slide.titleKey)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 font-serif animate-fadeIn">
                {t(slide.titleKey)}
              </h1>
              <p className="text-lg md:text-2xl text-white mb-6">{t(slide.subtitleKey)}</p>
              <a
                href={slide.link}
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 transition-all"
              >
                {t(slide.ctaKey)}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
