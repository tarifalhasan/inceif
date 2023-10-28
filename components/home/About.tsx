import Image from "next/image";
import { FC } from "react";
import Container from "../Container";

const About: FC = () => {
  return (
    <Container>
      <div className="flex py-10 flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={"/about.png"}
            alt="hero image"
            width={550}
            height={300}
            sizes="(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 752px, (min-width: 640px) 624px, (min-width: 520px) 459px, calc(87.5vw + 22px)"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2>About INCEIF</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque enim nibh magna nec, sit mauris. Scelerisque a risus,
            fermentum pretium ipsum libero, amet, luctus. Mattis ac in pretium
            volutpat. Lorem nibh neLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque enim nibh magna nec, sit mauris.
            Scelerisque a risus, fermentum pretium ipsum libero, amet, luctus.
            Mattis ac in pretium volutpat. Lorem nibh ne
          </p>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
};

export default About;
