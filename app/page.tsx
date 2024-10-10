import Header from "@/components/header/Header";
import Slid from "@/components/slid/Slid";
import Type from "@/components/Type/Type";
import Footer from "@/components/footer/Footer";
import Map from "@/components/Map/Map";

export default function Home() {
  return (
    <>
      <Header />
      <Slid />
      <Type />
      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
  <Map />
</section>

      <Footer />
    </>
  );
}
