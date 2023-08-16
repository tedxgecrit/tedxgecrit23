import Container from "./utility/Container";
import Heading from "./utility/Heading";

export default function ContactUs() {
    return(
        <Container section='contact'> 
            <div className="w-full h-screen">
                <Heading>Contact</Heading>
                <div className="flex flex-col items-center text-center">
                <div className="md:w-[40%] w-[73%] pt-[25px] text-center text-[24px] font-light leading-relaxed">Feel free to contact us if you have any questions, comments or concerns</div>
                <div className="w-full h-[385px] mt-10">
                    <div className="mb-[25px]"><input placeholder="Name" type="text" className="md:w-[50%] w-[82%] h-[45px]  rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] placeholder:pl-[10px] placeholder:text-[20px] placeholder:font-light"/></div>
                    <div className="mb-[25px]"><input placeholder="Email/Phone" type="text" className="md:w-[50%] w-[82%] h-[45px]  rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] placeholder:pl-[10px]  placeholder:text-[20px] placeholder:font-light"/></div>
                    <textarea placeholder="Your message..." type="text" className="md:w-[50%] w-[82%] h-[220px] rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] placeholder:pl-[10px] placeholder:pt-[10px]  placeholder:text-[20px] placeholder:font-light"/>
                </div>
                    <button className="md:w-[280px] w-[232px] h-[50px] mt-[30px] bg-[#DA0400] rounded-[5px] text-[20px] font-semibold">SEND MESSAGE</button>                
                </div>
            </div>
        </Container>
    );
    
}