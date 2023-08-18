import Container from "../utility/Container";
import { SponsorData } from "@/data/SponsorData";
import Image from "next/image";
import Heading from "../utility/Heading";

export default function Sponsors() {
  return (
    <Container>
      <section className="mx-[4%] my-24">
        <Heading>our sponsors</Heading>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8 md:px-[5%]">
          {SponsorData.map((sponsor, index) => (
            <div key={index} className="group aspect-square w-[100px]">
              <Image
                src={sponsor.link}
                alt={sponsor.text}
                key={index}
                className="aspect-square w-full object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
                height={200}
                width={200}
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
