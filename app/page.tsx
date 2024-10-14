import Header from "@/components/header/Header";
import Slid from "@/components/slid/Slid";
import Type from "@/components/Type/Type";
import Footer from "@/components/footer/Footer";
import Map from "@/components/Map/Map";
import About from "@/components/about/about";
import dynamic from 'next/dynamic';

// Make sure the path includes the full filename
const ChatbotComponent = dynamic(() => import('../components/chatbot/ChatbotComponent'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Slid />
      <Type />
      <About />
      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
        <Map />
      </section>
      <ChatbotComponent />
      <Footer />

    </>
  );
}
