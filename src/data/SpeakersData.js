import aa from "../../public/speakers/anoop_ambika.webp";
import vv from "../../public/speakers/v_vigneshwari.webp";
import ar from "../../public/speakers/anaswara_ramesh.webp";

class Speaker {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Speaker_data = [
  new Speaker(
    "V Vigneswari IAS",
    "Meet the remarkable Ms. V Vigneswari IAS, a dynamic force currently serving as the Kottayam District Collector. Marked by her dedication to public service Ms. Vigneswari had earlier served as the managing director of KTDC and Director of Collegiate Education. Step into the extraordinary world of V. Vigneswari, a former TCS engineer turned public servant, passionately advocating for a nation rid of child labor and a person who seeks public opinion to shape change collaboratively. Brace yourselves to be inspired and amazed by the remarkable  IAS officer whose vision goes far beyond convention here at TEDxGECRIT.",
    vv
  ),
  new Speaker(
    "Anoop Ambika",
    "Anoop P Ambika is the Chief Executive Officer at Kerala Startup Mission. He is  a multifaceted personality renowned as a serial entrepreneur and fervent technology enthusiast, a former CEO of Genpro Research and Cognub Decision Solutions. Anoop P Ambika is no ordinary speaker, co-founder of cutting-edge startups, Anoop's insights transcend conventional boundaries and is currently responsible for leading the development and execution of Kerala Startup Mission's decision sciences product and services strategy using AI and advanced analytics. Prepare to be captivated on September 9th with an exhilarating dive into the dynamic intersections of technology, entrepreneurship and decision sciences with him at TedxGECRIT.",
    aa
  ),
  new Speaker(
    "Anaswara Ramesh",
    "Hailing from the picturesque city of Kochi, Kerala, and currently a student at Bhavans Adarsha Vidyalaya in Kakkanad, Anaswara Ramesh is not your typical teenager. She has etched her name in the prestigious pages of both the India Book of Records and the Asia Book of Records. Beyond the accolades, her ingenuity has been recognized with the Jagran Josh Educational Award, a testament to her ingenious application of science and technology. As a proud recipient of the CCRT Scholarship from the central government, is symbol of her commitment to her studies and the arts. And her dedication to making a tangible impact shines brightly through her WhiteHat Jr Scholarship for developing one of the best 50 apps in the Swachh Bharat Swachh Camps initiative.",
    ar
  ),
];
