import Container from "@/components/utility/Container";
import RedText from "./utility/RedText";

const AboutTheme = () => {
  return (
    <Container section="about_theme">
      <article className="flex w-full items-center justify-center pt-2 text-center md:px-[5%]">
        <p className="para block px-2 text-left md:px-0 md:text-center">
          In a world of complexities, contradictions, and mysteries, TEDxGECRIT
          presents <RedText>"Unraveling Paradoxes."</RedText> Through
          thought-provoking talks and engaging discussions, we invite you to
          embrace the beauty of paradoxes that shape our lives, explore their
          profound depths, and unlock the hidden wisdom they hold.
          <br />
          <br /> Let's spark profound discussions and connect with fellow
          seekers, as we uncover the power of{" "}
          <RedText>"Unraveling Paradoxes"</RedText> to inspire changes, trigger
          minds, and create a world where paradoxes are not problems, but
          gateways to profound understanding.
        </p>
      </article>
    </Container>
  );
};

export default AboutTheme;
