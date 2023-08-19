import Address from "@/components/Footers/Address";
import Logos from "@/components/Footers/Logos";
import UsefulLinks from "@/components/Footers/UsefulLinks";
import { githubLink, instagramLink, linkedinLink, ytLink } from "@/data/links";
import FooterIcon from "./Footers/FooterIcon";

const Footer = () => {
  return (
    <footer className="w-screen space-y-5 bg-deepGrey px-[2rem] py-[3rem] md:mt-[6rem] md:space-y-[5rem] md:py-[4rem] lg:px-[150px]">
      <section className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
        <Logos />
        <Address />
        <UsefulLinks />
      </section>
      <section className="footer_text flex flex-col-reverse items-center justify-between gap-3 text-center md:flex-row ">
        <div>2023 TEDxGECRIT</div>
        <div className="flex flex-row justify-center gap-1">
          <FooterIcon link={linkedinLink} iconName="linkedin" />
          <FooterIcon link={instagramLink} iconName="instagram" />
          <FooterIcon link={githubLink} iconName="github" />
          <FooterIcon link={ytLink} iconName="youtube" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
