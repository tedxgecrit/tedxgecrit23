import Container from "../utility/Container";
import { SponsorData } from "@/data/SponsorData";
import Image from "next/image";
import Heading from "../utility/Heading";
import Link from "next/link";

export default function Sponsors() {
  if (SponsorData.length === 0) return <></>;
  return (
    <Container>
      <section className="mx-[4%]">
        <Heading>our sponsors</Heading>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8 md:px-[5%]">
          {SponsorData.map((sponsor, index) => (
            <div
              key={index}
              className="group aspect-square w-[100px] cursor-pointer"
            >
              <h2 className="mb-1 text-center text-[18px] leading-tight opacity-[70%]">
                {sponsor.title}
              </h2>
              <Link href={sponsor.website} target="_blank" className="">
                <Image
                  src={sponsor.image}
                  alt={sponsor.alt}
                  key={index}
                  className=" image-select-none aspect-square h-full w-full overflow-hidden rounded-full border-[1px] border-white object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
                  height={200}
                  width={200}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
