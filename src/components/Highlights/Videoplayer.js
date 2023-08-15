import React from "react";

const VideoPlayer = () => {
  const src = "https://www.youtube.com/watch?v=l_9lOzqoXsA";
  return (
    <iframe
      width="100%"
      height="100%"
    //   className="rounded-tl-[40px] rounded-br-[40px]"
      src="https://www.youtube.com/embed/Cb91MpODfBU"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;