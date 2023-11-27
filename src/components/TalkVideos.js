import Container from "./utility/Container";
import EachTalk from "./TalkVideos/EachTalk";
import { TalksLinks } from "@/data/TalksLinks";

const TalkVideos = () => {
  return (
    <Container>
      <div className="min-h-screen">
        <div className="mb-32 flex flex-col content-center items-center gap-16 px-8 text-white lg:mb-0 lg:gap-32 lg:px-0">
          {TalksLinks.map((talk) => (
            <EachTalk
              key={talk.name}
              name={talk.name}
              ytLink={talk.ytLink}
              imageLink={talk.imageLink}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TalkVideos;
