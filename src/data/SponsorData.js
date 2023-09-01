import certify_me from "../../public/sponsors/certify_me.webp";
import msigma from "../../public/sponsors/msigma.webp";
import rit from "../../public/sponsors/rit.webp";

class Sponsor {
  constructor(title, alt, website, image, description = "") {
    this.title = title;
    this.alt = alt;
    this.website = website;
    this.image = image;
    this.description = description;
  }
}

export const SponsorData = [
  new Sponsor(
    "Supporting Sponsor",
    "GEC RIT, Kottayam",
    "http://www.rit.ac.in/",
    rit,
    "Nestled amidst the lush green landscapes of Kerala, Rajiv Gandhi Institute of Technology Kottayam (RIT) stands as a beacon of academic excellence and innovation. As one of the most distinguished Government engineering colleges in the state, with NBA accredited Undergraduate programs RIT has consistently earned a reputation for nurturing exceptional talent and intellectual curiosity."
  ),
  new Sponsor(
    "Credential Sponsor",
    "CertifyMe",
    "https://www.certifyme.online/",
    certify_me,
    "CertifyMe is a trusted digital credentialing SaaS platform used by 2000+ global brands and 1 million users in 144 countries. It automates the credentialing process with a user-friendly design, prioritizing scalability and customization for educational institutions, associations, and training providers. Our robust system streamlines credential issuance and tracking, enhancing the value of your credentials through innovation and excellence. We take pride in our unyielding commitment to innovation and excellence, continuously pushing the boundaries of digital credentialing solutions to exceed our customers' expectations."
  ),
  new Sponsor(
    "Education Sponsor",
    "MSIGMA GOKULAM",
    "https://www.msigmagokulam.com/",
    msigma,
    "Msigma Gokulam is a passionate educational company founded by Manu M Rajan, an engineer turned teacher. It's dedicated to simplifying complex engineering concepts through innovative pedagogy. Initially, a local success, it went online due to high demand, and later partnered with the Gokulam group to become Msigma Gokulam Pvt. Ltd. Today, they aim to empower engineering students nationwide and build a skilled talent pool."
  ),
];
