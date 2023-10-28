import Image from "next/image";
import { FC } from "react";
import Container from "../Container";

const About: FC = () => {
  return (
    <Container>
      <div className="flex py-10 lg:py-28 flex-col lg:flex-row items-center gap-10">
        <div className="w-full  flex justify-center lg:w-1/2">
          <Image src={"/about.png"} alt="hero image" width={470} height={541} />
        </div>
        <div className="w-full space-y-4 lg:w-1/2">
          <h2 className="heading">
            About <strong>INCEIF</strong>
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque enim nibh magna nec, sit mauris. Scelerisque a risus,
            fermentum pretium ipsum libero, amet, luctus. Mattis ac in pretium
            volutpat. Lorem nibh neLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque enim nibh magna nec, sit mauris.
            Scelerisque a risus, fermentum pretium ipsum libero, amet, luctus.
            Mattis ac in pretium volutpat. Lorem nibh ne
          </p>
          <div className=" w-full flex items-center gap-3">
            <div className=" w-[40%] h-[1px] bg-gradient-1"></div>
            <div className=" w-[7%] h-[1px] bg-gradient-1"></div>
            <div className=" w-[7%] h-[1px] bg-gradient-1"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
