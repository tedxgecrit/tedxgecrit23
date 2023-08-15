import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Speakers />
      <Highlights />
    </main>
  );
}
