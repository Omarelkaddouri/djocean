"use client"; // This line enables client-side rendering

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Slid = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Fetching types from the API
  useEffect(() => {
    const loadTypes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/types'); // Use the proxy you created
        const data = await response.json();

        if (data.success) {
          setTypes(data.types);
        } else {
          throw new Error('Failed to fetch types');
        }
      } catch (error) {
        console.error("Failed to load types:", error);
        setError("Failed to load types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadTypes();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p>Loading types...</p>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center py-12">{error}</p>;
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
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {types.map((type) => (
        <SwiperSlide
          key={type.id}
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
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>{type.title}</h3>
            <p style={{ fontSize: "1.5rem", color: "#555", marginBottom: "15px" }}>Explore more about {type.title}!</p>
            <Link href={`/categories/${type.id}`}>
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
              src={type.image}
              alt={type.title}
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
