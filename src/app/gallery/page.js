import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Heading from "@/components/utility/Heading";
import Container from "@/components/utility/Container";
import Gallery from "@/components/Gallery/Gallery";

export default function Page() {
  return (
    <main>
      <Navbar home={false} />
      <Container>
        <Heading>Gallery</Heading>
        <br />
        <Gallery />
      </Container>
      <Footer />
    </main>
  );
}
