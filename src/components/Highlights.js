import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import VideoPlayer from "@/components/Highlights/VideoPlayer";

export default function Highlights() {
  return (
    <Container section="highlights">
      <div>
        <Heading>Highlights</Heading>
        <div className="mt-[15px] flex h-[385px] w-full flex-col content-center items-center md:mt-[70px] md:h-[675px]">
          <div className="absolute mt-[110px] h-[140px] w-[95%] bg-red md:mt-[220px] md:h-[266px] md:w-[75%]"></div>
          <div className="absolute h-[230px] w-[90%] md:h-[439px] md:w-[65%]">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </Container>
  );
}
