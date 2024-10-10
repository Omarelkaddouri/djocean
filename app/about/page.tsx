"use client";
import Link from 'next/link';
import Header from "@/components/header/Header";
import React from "react";
import Footer from "@/components/footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">About Us</h1>

          <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are a passionate team of music enthusiasts dedicated to providing musicians of all levels with the highest quality music shopping materials. From instruments to accessories, we aim to cater to all your musical needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our love for music drives us to curate an extensive selection of products that inspire creativity and enhance your musical journey.
            </p>
          </section>

          <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to empower musicians by offering a wide range of quality materials at affordable prices. We believe that everyone deserves the opportunity to explore their musical talent and express themselves through music.
            </p>
          </section>

          <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
              <li>Customer Satisfaction: We prioritize our customers&apos; needs and strive to provide excellent service.</li>
              <li>Quality: We carefully select products from trusted brands to ensure durability and performance.</li>
              <li>Community: We are committed to supporting local musicians and fostering a vibrant music community.</li>
              <li>Innovation: We stay updated with the latest trends in music materials to offer you the best options.</li>
            </ul>
          </section>

          <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">What You Can Expect</h2>
            <p className="text-lg text-gray-700 mb-4">
              When you shop with us, you can expect:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
              <li>A diverse range of music materials, including instruments, accessories, and sheet music.</li>
              <li>Helpful customer service that guides you in selecting the right products.</li>
              <li>Competitive prices and regular promotions to help you save on your music shopping.</li>
              <li>Resources and tips to support your musical journey.</li>
            </ul>
          </section>

          <div className="text-center">
            <Link href="/" className="text-lg text-blue-500 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
