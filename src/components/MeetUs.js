import Container from "@/components/utility/Container";

export default function MeetUs() {
  return (
    <Container section="meetus">
      <div className="w-full h-[600px] flex  flex-col items-center justify-center text-center mb-[100px]">
        <div className="md:w-[75%] w-[89%] text-[22px] font-light md:text-[24px] mb-[20px] leading-tight">
          This initiative would not have been possible without the generous
          support of our sponsors and team members. ❤️
        </div>
        <button className="h-[50px] w-[232px] rounded-[5px] bg-red text-[20px] font-semibold md:w-[280px]">
          MEET THEM
        </button>
      </div>
    </Container>
  );
}
