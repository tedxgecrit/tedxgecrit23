import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";

export default function ContactUs() {
    return(
        <Container section='contact'> 
            <div className="w-full h-screen">
                <Heading>Contact</Heading>
                <div className="flex flex-col items-center text-center">
                <div className="md:w-[40%] w-[73%] pt-[25px] text-center md:text-[24px] text-[20px] font-light">Feel free to contact us if you have any questions, comments or concerns</div>
                <div className="w-full h-[385px] mt-10">
                    <div className="mb-[25px]"><input placeholder="Name" type="text" className="focus:outline-none md:w-[50%] w-[82%] h-[45px]  rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] pl-[10px] placeholder:text-[18px] placeholder:font-light" required/></div>
                    <div className="mb-[25px]"><input placeholder="Email/Phone" type="text" className="focus:outline-none md:w-[50%] w-[82%] h-[45px]  rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] pl-[10px] placeholder:text-[18px] placeholder:font-light"required/></div>
                    <textarea placeholder="Your message..." type="text" className="focus:outline-none resize-none md:w-[50%] w-[82%] h-[220px] rounded-t-[5px] bg-[#1B1B1B] border-b-2 border-[#DA0400] pl-[10px] pt-[10px]  placeholder:text-[18px] placeholder:font-light" required/>
                </div>
                    <button className="md:w-[280px] w-[232px] h-[50px] md:mt-[30px] mt-[10px] bg-[#DA0400] rounded-[5px] text-[20px] font-semibold">SEND MESSAGE</button>                
                </div>
            </div>
        </Container>
    );   
}