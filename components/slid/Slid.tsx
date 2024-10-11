"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Slid = () => {
  const [isMobile, setIsMobile] = useState(false);

  const slidesData = [
    {
      img: "/images/guitar_slid.jpg",
      title: "Guitars",
      description: "Explore a variety of guitars suited for every musician.",
      link: "/slid1",
    },
    {
      img: "/images/bases_slid.jpg",
      title: "Basses",
      description: "Find your perfect bass with rich tones and durability.",
      link: "/slid2",
    },
    {
      img: "/images/drums_slid.jpg",
      title: "Drums",
      description: "Rhythm made easy with our range of drum kits.",
      link: "/slid3",
    },
    {
      img: "/images/djs_slid.jpg", // New DJ Equipment image
      title: "DJ Equipment",
      description: "Unleash your creativity with our professional DJ equipment.",
      link: "/slid4", // Link for the DJ Equipment slide
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
            minHeight: "600px", // Increased height for slides
            backgroundColor: "#f0f0f0", // Background color for slides
            padding: "20px", // Padding around content
            borderRadius: "10px", // Optional rounded corners
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
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>{slide.title}</h3>
            <p style={{ fontSize: "1.5rem", color: "#555", marginBottom: "15px" }}>{slide.description}</p>
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
                  transition: "background-color 0.3s ease", // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#a3000a"} // Darker shade on hover
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#cf000c"} // Original color
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
