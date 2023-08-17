import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import MeetUs from "@/components/MeetUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Speakers />
      <Highlights />
      <MeetUs />
      <ContactUs />
    </main>
  );
}
