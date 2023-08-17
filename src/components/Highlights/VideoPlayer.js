import { youtubeLink } from "@/data/links";

const VideoPlayer = () => {
  return (
    <iframe
      width="780"
      height="480"
      loading="eager"
      // className="rounded-tl-[40px] rounded-br-[40px]"
      className="z-2 absolute left-[50%] h-[187px] w-[350px] -translate-x-1/2 md:h-[416px] md:w-[750px] lg:h-[480px] lg:w-[900px] lg:rounded-[5px] "
      src={youtubeLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
