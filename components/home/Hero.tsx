import Image from "next/image";
import Container from "../Container";

const Hero = () => {
  return (
    <div className=" pt-28 pb-14 lg:h-screen relative overflow-hidden z-40 w-full bg-no-repeat bg-gradient-1">
      <Container className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-10 lg:flex-row items-center">
          <div className="w-full space-y-4 lg:w-1/2">
            <h1 className=" text-t-48 lg:text-t-70 leading-[55px] font-gilroy font-bold lg:leading-[82px] text-white capitalize">
              Knowledge <br /> Management <br /> Software
            </h1>
            <p className="text-lg font-normal  text-white">
              Lorem ipsum dolor sit amet consectetur. Vitae commodo nec at
              feugiat. Egestas arcu nunc nulla nullam eu vitae egestas viverra
              egestas.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/hero.png"}
              alt="hero image"
              width={650}
              className="w-full h-full object-cover block mx-auto"
              height={400}
              sizes="(min-width: 1540px) 760px, (min-width: 1280px) 632px, (min-width: 1040px) 504px, (min-width: 780px) 752px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
