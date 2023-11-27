import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TalkVideos from "@/components/TalkVideos";

export default function Page() {
  return (
    <main>
      <Navbar home={false} />
      <TalkVideos />
      <Footer />
    </main>
  );
}
