import Link from "next/link";
import SmallHeading from "./SmallHeading";

const UsefulLinks = () => {
  return (
    <div className="text-center md:flex-1 md:text-right">
      <SmallHeading>Useful Links</SmallHeading>
      <div className="footer_text my-1 flex cursor-pointer flex-col gap-1">
        <p>
          <Link className="ease hover:text-red" href="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="ease hover:text-red" href="/#tickets">
            Tickets
          </Link>
        </p>
        <p>
          <Link className="ease hover:text-red" href="/meet-us">
            Sponsors
          </Link>
        </p>
        <p>
          <Link className="ease hover:text-red" href="/meet-us">
            Team
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UsefulLinks;
