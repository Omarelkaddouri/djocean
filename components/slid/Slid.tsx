"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link'; // Import Link from Next.js

const Slid = () => {
  // Array of images and their corresponding titles, descriptions, and links
  const slidesData = [
    {
      img: "https://t4.ftcdn.net/jpg/00/64/91/37/360_F_64913707_PNS2WMobSFvvUgZrr4LuXbPUmpTSlBl1.jpg",
      title: "Guitars ",
      description: "Description for slide 1. This is a short description.",
      link: "/slid1" // URL for navigation
    },
    {
      img: "https://t3.ftcdn.net/jpg/02/16/35/78/360_F_216357832_E67FUQu5RRRCe9pUb1uefbJJSBK0Wiza.jpg",
      title: "Bases",
      description: "Description for slide 2. This is a short description.",
      link: "/slid2" // URL for navigation
    },
    {
      img: "https://i.imgur.com/rwvqF14.jpeg",
      title: "Drums",
      description: "Description for slide 3. This is a short description.",
      link: "/slid3" // URL for navigation
    }
  ];

  return (
    <Swiper
      style={{ marginTop: "10px" }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
          <div style={{ padding: "10px", flex: '1',fontSize:"30px" }} className="text-3xl">
            <h3 className='text-bold'  >{slide.title}</h3>
            {/* <p>{slide.description}</p> */}
          </div>
          <Link href={slide.link}> {/* Link wrapping the image for navigation */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              style={{
                marginTop: "10px",
                width: "100%",
                maxWidth: "600px", // Define max width for larger screens
                height: "auto", // Maintain aspect ratio
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px", // Optional: add some border radius
              }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slid;
