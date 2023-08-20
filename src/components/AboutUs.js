import Container from "@/components/utility/Container";
import Description from "@/components/About/Description";
import AboutHeading from "@/components/About/AboutHeading";
import AboutText from "@/components/About/AboutText";
import ReadMore from "@/components/About/ReadMore";
import Heading from "./utility/Heading";

const AboutUs = () => {
  return (
    <Container section="about">
      <Heading>About Us</Heading>
      <div className="flex flex-col gap-8 md:flex-row">
        <Description>
          <AboutHeading id="1">TED</AboutHeading>
          <AboutText>
            In the world of TED, human ingenuity and a dynamic platform bring
            together a collective of ideas that transcend borders. Like a master
            artist painting a canvas, TED reveals the beauty of knowledge,
            offering talks that span diverse fields, giving life to
            groundbreaking concepts in technology, arts, sciences, and beyond.
            Join this global collective, where ideas are born, and passions
            collide, envisioning a world of "ideas worth spreading."
          </AboutText>
          <ReadMore link="https://www.ted.com/" />
        </Description>
        <Description>
          <AboutHeading id="2">TEDx</AboutHeading>
          <AboutText>
            TEDx is a program of locally organized events that aims to replicate
            the Ted experience. The "x" in tedx stands for independently
            organized Ted events. These self-organized events are a combination
            of TedTalks videos and live speakers, sparking deep discussions and
            connections in smaller groups. These events ignites the flame of
            inspiration, inviting people together to share transformative
            experiences and foster connections through the power of shared
            wisdom.
          </AboutText>
          <ReadMore link="https://www.ted.com/about/programs-initiatives/tedx-program" />
        </Description>
        <Description>
          <AboutHeading id="3">TEDx GEC RIT</AboutHeading>
          <AboutText>
            TEDxGECRIT is an independently organised TED event. TEDxGECRIT
            strives to create a platform for diverse voices to share their
            stories, ideas ,insights and perspectives. Paradoxes are the keys
            that unlock doors to new perspectives. At our event we embark on a
            captivating journey of "Unraveling Paradoxes". Our aim is to bring
            together bright and intellectual minds to give talks that will
            transform your understanding of contradictions and lead you on a
            path of self discovery.
          </AboutText>
        </Description>
      </div>
    </Container>
  );
};

export default AboutUs;
