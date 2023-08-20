import Image from "next/image";

const Logos = () => {
  return (
    <div className="mt-[6px] flex flex-col items-center text-center md:flex-1 md:items-start md:text-left">
      <Image
        src="/logos/logo.webp"
        height={40}
        width={275}
        loading="lazy"
        alt="TEDx GEC RIT logo, Kottayam"
      />
      <p className="footer_text mt-2">
        This independent TEDx event
        <br /> is operated under license
        <br /> from TED.
      </p>
    </div>
  );
};

export default Logos;
