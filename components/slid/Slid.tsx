"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Slid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [slidesData, setSlidesData] = useState([]); // State for slides data
  const [loading, setLoading] = useState(true); // State for loading

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

  useEffect(() => {
    const fetchSlidesData = async () => {
      try {
        
        // Replace this URL with your fake API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3');
        const data = await response.json();
        
        // Map the fetched data to match the slide structure, including category links
        const formattedData = data.map(slide => ({
          img: slide.url,
          title: slide.title,
          description: slide.title, // You can modify this if you have a separate description field
          link: `/Type/${slide.title.toLowerCase().replace(/\s+/g, '-')}`, // Example link based on title
        }));
        
        setSlidesData(formattedData);
      } catch (error) {
        console.error("Error fetching slides data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchSlidesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <Swiper
      style={{ marginTop: "10px" }}
      navigation
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
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
            flexDirection: isMobile ? 'column' : 'row', // Change to column if isMobile
          }}
        >
          <Link href={slide.link} style={{ width: "100%", display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
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
              <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "10px" }}>{slide.title}</h3>
              <p style={{ fontSize: "1rem", color: "#555", marginBottom: "15px" }}>{slide.description}</p>
              <button
                style={{
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
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
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slid;
