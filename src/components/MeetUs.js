import Container from "./utility/Container";

export default function MeetUs() {
    return(
        <Container section='meetus'>
            <div className="w-full h-[600px] mb-[100px]   flex flex-col items-center justify-center text-center">
                <div className="md:w-[75%] w-[89%] md:text-[24px] text-[22px] mb-[20px] font-light">This initiative would not have been possible without the generous support of our sponsors and team members. ❤️</div>            
                <button className="md:w-[280px] w-[232px] h-[50px] bg-[#DA0400] rounded-[5px] text-[20px] font-semibold">MEET THEM</button>            
            </div>            
        </Container>
    );
}