import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import VideoPlayer from "@/components/Highlights/VideoPlayer";

export default function Highlights() {
  return (
    <Container section="highlights">
      <Heading>Highlights</Heading>
      <div className="pb-[5rem]">
        <div className="mt-[15px] flex w-full flex-col md:mt-[70px]">
          <div className="relative h-[230px] w-full md:h-[439px]">
            <div className="absolute left-[50%] mt-[110px] h-[93px] w-[370px] -translate-x-[50%]  bg-red md:mt-[220px] md:h-[208px] md:w-[770px] lg:h-[300px] lg:w-[1000px] lg:rounded-[5px]"></div>
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Container>
  );
}
