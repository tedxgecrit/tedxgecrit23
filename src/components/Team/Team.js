import Container from "../utility/Container";
import Heading from "../utility/Heading";
import Organizer from "./Organizer";
import { volunteers } from "@/data/TeamData";
import Group from "./Group";

export default function Team() {
  return (
    <Container>
      <section className="mx-[4%] my-10">
        <Heading>our team</Heading>
        <div className="px-4">
          <Organizer />
          <div className="my-16 space-y-16">
            {Object.keys(volunteers).map((key, index) => (
              <Group key={index} teamData={volunteers[key]} heading={key} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
