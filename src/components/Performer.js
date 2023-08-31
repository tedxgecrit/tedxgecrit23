import Container from "@/components/utility/Container.js";
import RedText from "./utility/RedText";
import SpecialPerformance from "./SpeakerCards/SpecialPerformance";

const Performer = () => {
  return (
    <Container>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6">
        {/* AYUSH KRISHNA */}
        <div className="h-[200px] w-full bg-ayush bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"></div>
        <SpecialPerformance id="1">
          Prepare to be captivated as our{" "}
          mentalist <RedText>Ayush Krishna</RedText> takes the stage,
          demonstrating his uncanny ability to read minds, predict outcomes, and
          influence thoughts. He will lead you into a world where the impossible
          becomes possible.
          <p className="mt-2 leading-tight">
            Get ready to have your mind blown! See you at TEDxGECRIT.
          </p>
        </SpecialPerformance>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6">
        <div className="h-[200px] w-full bg-sabareesh bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"></div>
        <SpecialPerformance id="2">
          <RedText>Sabareesh Narayanan</RedText> better known in the limelight
          as <quote className="italic">'standupsabari'</quote> is one of the
          popular stand up comedian from Kerala,who is also a well rounded
          advertising consultant,freelance filmmaker and entrepreneur.With his
          unparalleled energy and witty observations he captivate the audience
          and take them into a world of non-stop giggles and rib tickling
          experience.
          <p className="mt-2 leading-tight">
            Don't miss your chance to experience Sabareesh Narayanan's comedic
            brilliance live on stage at TEDxGECRIT.
          </p>
        </SpecialPerformance>
      </div>
    </Container>
  );
};

export default Performer;
