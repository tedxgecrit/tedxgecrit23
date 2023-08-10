"use client";

import Container from "@/components/utility/Container";
import Graphics from "@/components/LandingPage/Graphics";
import Details from "./LandingPage/Details";

export default function LandingPage() {
  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
  };
  return (
    <Container>
      <div
        className="flex h-auto w-full flex-col content-center items-center"
        onMouseMove={handleMouseMove}
      >
        <Details />
        <Graphics />
      </div>
    </Container>
  );
}
