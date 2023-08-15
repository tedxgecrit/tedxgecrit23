import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import VideoPlayer from "@/components/Highlights/VideoPlayer";

export default function Highlights() {
   return (
   <Container section='highlights'>
    <div className='h-max mb-[550px]'>
        <Heading >Highlights</Heading>
        <div className="h-auto w-full flex flex-col content-center items-center md:mt-[70px] mt-[15px]">
            <div className="md:w-[75%] w-[95%] md:h-[266px] h-[140px] bg-red absolute md:mt-[220px] mt-[110px]"></div>
            <div className="md:w-[65%] w-[90%] md:h-[439px] h-[230px] absolute"><VideoPlayer /></div>
        </div>
    </div>
    </Container>
    );
    
}