import balls from "@/assets/llistator.png";
import Image from "next/image";
import Container from "../Container";
const KMNPortal = () => {
  return (
    <div className="pb-14 relative pt-10 lg:pb-24">
      <Container>
        <div className="flex items-center flex-col lg:flex-row gap-7">
          <div className=" order-last lg:order-first lg:w-1/2 w-full">
            <Image
              src={"/kmc_portal.png"}
              alt="hero image"
              width={600}
              height={500}
              sizes="(min-width: 1540px) 760px, (min-width: 1280px) 632px, (min-width: 1040px) 504px, (min-width: 780px) 752px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
            />
          </div>
          <div className="space-y-5  order-first lg:order-last w-full lg:w-1/2">
            <h2 className="heading">KMC Portal</h2>
            <p className="description max-w-[538px]">
              Discover and get access to Islamic and Conventional Finance
              Resources.
            </p>
            <button className="subscribe_btn">
              Explore Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <div className="absolute 2xl:block hidden right-0 top-10">
        <Image src={balls} alt="hero image" />
      </div>
    </div>
  );
};

export default KMNPortal;
