import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import VideoPlayer from "@/components/Highlights/VideoPlayer";

export default function Highlights() {
  return (
    <Container section="highlights">
      <div className="mb-[550px] h-max">
        <Heading>Highlights</Heading>
        <div className="mt-[15px] flex h-auto w-full flex-col content-center items-center md:mt-[70px]">
          <div className="mt-[110px absolute h-[130px] w-[95%] bg-[#DA0400] md:mt-[220px] md:h-[286px] md:w-[75%] lg:rounded-[5px]"></div>
          <div className="absolute h-[230px] w-[90%] md:h-[439px] md:w-[65%]">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Container>
  );
}
