import { NavLinks } from "@/data/Navbar";
import Link from "next/link";

export default function Links() {
  return (
    <>
      {NavLinks.map((item, index) => (
        <li key={index} className="nav_items font-semibold">
          <Link href={`${item?.link}`}>{item?.text}</Link>
        </li>
      ))}
    </>
  );
}

export function HomeLink() {
  return (
    <li className="nav_items">
      <Link href="/">Go to Home</Link>
    </li>
  );
}
