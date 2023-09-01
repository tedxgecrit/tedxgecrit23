import Image from "next/image";
import Link from "next/link";

const SponsorPopup = ({ popupOpen, setPopupOpen, sponsor }) => {
  return (
    <div className={`sponsor_popup ${popupOpen ? "popupOpen" : "popupClose"}`}>
      <div className="flex h-fit w-full justify-end">
        <div
          className="h-[30px] w-[30px] cursor-pointer"
          onClick={() => setPopupOpen(false)}
        >
          <Image src="/icons/close.svg" alt="close" width={30} height={30} />
        </div>
      </div>
      <div className="h-[fit]">
        <h2 className="mb-1 text-left text-[40px] leading-none">
          {sponsor.alt}
        </h2>
        <h3 className="mb-1 text-left text-[20px] uppercase leading-tight tracking-wide ">
          {sponsor.title}
        </h3>
        <p className="mt-3 text-[14px] leading-tight opacity-80">
          {sponsor.description || ""}
        </p>
        <div className="mt-6">
          <Link
            className="ease rounded-sm border-[1px] border-white bg-none px-8 py-1 transition-all duration-300 hover:border-red hover:bg-red"
            href={sponsor.website || ""}
            target="_blank"
          >
            Visit Website
          </Link>
        </div>
      </div>
      <span className="flex h-[30px] w-full"></span>
    </div>
  );
};

export default SponsorPopup;
