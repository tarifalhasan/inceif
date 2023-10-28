import About from "@/components/home/About";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
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
    </div>
  );
}
