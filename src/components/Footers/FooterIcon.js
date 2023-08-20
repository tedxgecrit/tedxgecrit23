import { IconData } from "@/data/IconData";
import Image from "next/image";
import Link from "next/link";

const FooterIcon = ({ link, iconName }) => {
  if (iconName)
    return (
      <Link href={link} target="_blank">
        <Image
          className="cursor-pointer transition-all duration-300 hover:scale-[1.15]"
          src={IconData[iconName]?.icon}
          alt={IconData[iconName]?.text}
          width={30}
          height={30}
          loading="lazy"
        />
      </Link>
    );
};

export default FooterIcon;
