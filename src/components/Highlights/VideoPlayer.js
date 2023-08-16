import { youtubeLink } from "@/data/links";

const VideoPlayer = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      //   className="rounded-tl-[40px] rounded-br-[40px]"
      src={youtubeLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
