"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext'; // Import language context
import { translate } from '../../translations'; // Import translate function

const Slid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage(); // Get the current language

  const slidesData = [
    {
      img: "/images/guitar_slid.jpg",
      title: "guitars", // Use translation key
      description: "Explore a variety of guitars suited for every musician.", // Use translation key if needed
      link: "/slid1",
    },
    {
      img: "/images/bases_slid.jpg",
      title: "basses", // Use translation key
      description: "Find your perfect bass with rich tones and durability.", // Use translation key if needed
      link: "/slid2",
    },
    {
      img: "/images/drums_slid.jpg",
      title: "drums", // Use translation key
      description: "Rhythm made easy with our range of drum kits.", // Use translation key if needed
      link: "/slid3",
    },
    {
      img: "/images/djs_slid.jpg",
      title: "djEquipment", // Use translation key
      description: "Unleash your creativity with our professional DJ equipment.", // Use translation key if needed
      link: "/slid4",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 932);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      style={{ marginTop: "10px" }}
      navigation
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            textAlign: 'left',
            flexDirection: isMobile ? 'column' : 'row',
            minHeight: "600px",
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: "20px",
              width: "100%",
              maxWidth: "600px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
              {translate(slide.title, language)} {/* Translate title */}
            </h3>
            <p style={{ fontSize: "1.5rem", color: "#555", marginBottom: "15px" }}>
              {translate(slide.description, language)} {/* Translate description if needed */}
            </p>
            <Link href={`/categories${slide.link}`}>
              <button
                style={{
                  padding: "16px 32px",
                  fontSize: "1.5rem",
                  backgroundColor: "#cf000c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#a3000a"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#cf000c"}
              >
                Discover
              </button>
            </Link>
          </div>
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <img
              src={slide.img}
              alt={slide.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slid;
