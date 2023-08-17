import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";

export default function ContactUs() {
  return (
    <Container section="contact">
      <div className="h-screen w-full">
        <Heading>Contact</Heading>
        <div className="flex flex-col items-center text-center">
          <div className="w-[73%] pt-[25px] text-center text-[20px] font-light md:w-[40%] md:text-[24px]">
            Feel free to contact us if you have any questions, comments or
            concerns
          </div>
          <form className="mt-10 h-[385px] w-full">
            <div className="mb-[25px]">
              <input
                placeholder="Name"
                type="text"
                className="h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] placeholder:text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                required
              />
            </div>
            <div className="mb-[25px]">
              <input
                placeholder="Email/Phone"
                type="text"
                className="h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] placeholder:text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                required
              />
            </div>
            <textarea
              placeholder="Your message..."
              type="text"
              className="h-[220px] w-[82%] resize-none rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] pt-[10px] placeholder:text-[18px] placeholder:font-light  focus:outline-none md:w-[50%]"
              required
            />
          </form>
          <button
            type="submit"
            className="mt-[10px] h-[50px] w-[232px] rounded-[5px] bg-red text-[20px] font-semibold md:mt-[30px] md:w-[280px]"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </Container>
  );
}
