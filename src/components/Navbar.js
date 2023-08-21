"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "@/components/Navbar/Hamburger";
import Links, { HomeLink } from "@/components/Navbar/Links";
import Link from "next/link";
import { yepDeskLink } from "@/data/links";

export default function Navbar({ home = true }) {
  const [close, setClose] = useState(false);
  const toggleClose = () => setClose(!close);

  return (
    <nav className="backdrop-saturate-180 border-b-1 sticky top-0 z-50 flex h-[75px] w-screen border-white border-opacity-100 bg-black/30 backdrop-blur-xl lg:px-9">
      <div className="absolute left-0 top-0 z-50 flex h-[75px] w-full flex-row items-center justify-between px-6 lg:justify-around">
        <span>
          <Image
            src="/logos/logo-small.webp"
            height={24}
            width={165}
            loading="eager"
            alt="TEDx GEC RIT logo, Kottayam"
          />
        </span>
        <div className="lg:hidden" onClick={toggleClose}>
          <Hamburger close={close} />
        </div>
        <ul className="hidden gap-12 lg:flex">
          {home ? <Links /> : <HomeLink />}
        </ul>
        <div className="hidden lg:block">
          <GetTicketsButton />
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`sticky left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black duration-700 ease-in-out lg:hidden ${
          close ? "nav-close" : "nav-open"
        }`}
      >
        <ul className="flex flex-col gap-12 text-center">
          {home ? <Links setClose={setClose} /> : <HomeLink />}
        </ul>
        <GetTicketsButton />
      </div>
    </nav>
  );
}

const GetTicketsButton = () => (
  <button className="w-[165px] rounded-[3px] bg-red font-semibold ">
    <Link
      href={yepDeskLink}
      className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
      target="_blank"
    >
      Get Tickets
    </Link>
  </button>
);
