import { youtubeLink } from "@/data/links";

const VideoPlayer = () => {
  return (
    <iframe
      width="780"
      height="480"
      loading="lazy"
      // className="rounded-tl-[40px] rounded-br-[40px]"
      className="z-2 absolute h-[187px] w-[350px] md:h-[416px] md:w-[750px] lg:left-[50%] lg:h-[480px] lg:w-[900px] lg:translate-x-[-50%] lg:rounded-[5px]"
      src={youtubeLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
