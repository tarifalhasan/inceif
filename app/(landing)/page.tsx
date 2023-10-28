import About from "@/components/home/About";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import KMNPortal from "@/components/home/KMNPortal";
import Subscription from "@/components/home/Subscription";
import Heading from "@/utils/Heading";

export default function Home() {
  return (
    <div className="">
      <Heading
        title="INCEIF."
        description="inceif is Knowledge Management Software Development "
        kyeword="softwaredevelop , website development"
      />
      <Header />
      <Hero />
      <About />
      <Subscription />
      <KMNPortal />
      <Footer />
    </div>
  );
}
