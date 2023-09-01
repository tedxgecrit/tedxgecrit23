import certify_me from "../../public/sponsors/certify_me.webp";
import msigma from "../../public/sponsors/msigma.webp";
import rit from "../../public/sponsors/rit.webp";

class Sponsor {
  constructor(title, alt, website, image) {
    this.title = title;
    this.alt = alt;
    this.website = website;
    this.image = image;
  }
}

export const SponsorData = [
  new Sponsor(
    "Supporting Sponsor",
    "GEC RIT, Kotayam",
    "http://www.rit.ac.in/",
    rit
  ),
  new Sponsor(
    "Credential Sponsor",
    "CertifyMe",
    "https://www.certifyme.online/",
    certify_me
  ),
  new Sponsor(
    "Education Sponsor",
    "MSIGMA GOKULAM",
    "https://www.msigmagokulam.com/",
    msigma
  ),
];
