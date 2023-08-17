import Container from "@/components/utility/Container";

export default function MeetUs() {
  return (
    <Container section="meetus">
      <div className="mb-[100px] flex w-full flex-col items-center justify-center text-center">
        <div className="mb-[20px] w-[89%] text-[22px] font-light leading-tight md:w-[75%] md:text-[24px]">
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
