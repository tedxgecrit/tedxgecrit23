import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import VideoPlayer from "@/components/Highlights/VideoPlayer";

export default function Highlights() {
  return (
    <Container section="highlights">
      <Heading>Highlights</Heading>
      <div className="pb-[10rem]">
        <div className="mt-[15px] flex w-full flex-col content-center md:mt-[70px]">
          <div className="relative h-[230px] w-[90%] md:h-[439px]">
            <div className="absolute mt-[110px] h-[93px] w-[370px] -translate-x-[10px] bg-red md:mt-[220px]  md:h-[208px] md:w-[770px] lg:h-[240px] lg:w-[1000px] lg:left-[50%] lg:-translate-x-[50%] lg:rounded-[5px]"></div>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Container>
  );
}
