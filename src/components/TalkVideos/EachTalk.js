"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const EachTalk = (props) => {
  const router = useRouter();
  const handleClick = () => router.push(props.ytLink);
  return (
    <div>
      <div className="w-full py-4 text-center text-[18px] font-bold leading-tight md:text-[24px]">
        Talk by {props.name}
      </div>
      <div
        onClick={handleClick}
        className="talk_image_container relative h-fit w-fit"
      >
        <Image
          src={props.imageLink}
          alt={props.name}
          className="rounded-xl shadow-xl"
          width={800}
          height={800}
        />
        <div className="talk_image"></div>
      </div>
    </div>
  );
};

export default EachTalk;
