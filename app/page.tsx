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
      
        <Map />
      <ChatbotComponent />
      <Footer />

    </>
  );
}
