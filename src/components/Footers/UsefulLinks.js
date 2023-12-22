import Link from "next/link";
import SmallHeading from "./SmallHeading";

const UsefulLinks = () => {
  return (
    <div className="flex flex-col gap-4 text-center md:flex-1 md:gap-6 md:text-right">
      <div>
        <SmallHeading>Useful Links</SmallHeading>
        <div className="footer_text my-1 flex cursor-pointer flex-col gap-1">
          <p>
            <Link className="ease hover:text-redText" href="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="ease hover:text-redText" href="/meet-us">
              Sponsors & Team
            </Link>
          </p>
        </div>
      </div>
      <div>
        <SmallHeading>GET IN TOUCH</SmallHeading>
        <div className="footer_text my-1 flex flex-col gap-1">
          <div>{process.env.NEXT_PUBLIC_PHONE}</div>
          <Link
            className="ease cursor-pointer hover:text-redText"
            href="mailto:tedxrit23@gmail.com"
          >
            tedxrit23@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
