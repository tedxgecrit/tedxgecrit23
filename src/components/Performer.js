import Container from "@/components/utility/Container.js";
import Heading from "./utility/Heading";
import RedText from "./utility/RedText";

const Performer = () => {
  return (
    <Container>
      <div className="flex h-fit w-full flex-col items-center justify-center rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6">
        <div className="h-[200px] w-full bg-ayush bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"></div>
        <div className="h-fit w-full ">
          <Heading>Special Performance</Heading>
          <div className="space-y-4 px-6 md:px-0">
            <p className="leading-tight md:w-[90%]">
              Prepare to be captivated as our{" "}
              <RedText>Mentalist Ayush Krishna</RedText> takes the stage,
              demonstrating his uncanny ability to read minds, predict outcomes,
              and influence thoughts. He will lead you into a world where the
              impossible becomes possible.
            </p>
            <p className="leading-tight">
              Get ready to have your mind blown! See you at TEDxGECRIT.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Performer;
