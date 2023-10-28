import Image from "next/image";
import Container from "../Container";

const Subscription = () => {
  return (
    <div className="pb-14 pt-10 lg:pb-24">
      <Container>
        <div className="space-y-8">
          <div className=" rounded-xl relative px-5 py-2 lg:px-14 bg-skin-blue-50 h-[361px]  gap-24 flex items-center">
            <div className=" max-w-[538px]  space-y-5">
              <h2 className=" text-[1.8rem] md:text-t-32 text-skin-black-900 font-inter font-bold">
                Membership Subscription
              </h2>
              <p className="description">
                Subscribe as a member of INCEIF KMC to enjoy access to INCEIF
                Knowledge Repository (IKR) and stay up-to-date with latest
                update in Islamic finance.
              </p>
              <button className="subscribe_btn">
                Subscribe Now{" "}
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
            <div className=" hidden lg:block absolute right-0 bottom-0">
              <Image
                src={"/subscription.png"}
                alt="hero image"
                width={470}
                height={541}
                sizes="(min-width: 1540px) 740px, (min-width: 1280px) 512px, (min-width: 1040px) 384px, (min-width: 780px) 552px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
              />
            </div>
          </div>
          <div className=" lg:hidden flex justify-center ">
            <Image
              src={"/subscription.png"}
              alt="hero image"
              width={470}
              height={541}
              sizes="(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 752px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;