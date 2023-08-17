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
            <div key={index} className="h-[100px] w-[100px]  overflow-hidden">
              <Image
                src={sponsor.link}
                alt={sponsor.text}
                key={index}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
