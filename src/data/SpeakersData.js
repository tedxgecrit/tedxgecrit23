import ar from "../../public/speakers/anaswara_ramesh.webp";
import aa from "../../public/speakers/anoop_ambika.webp";
import an from "../../public/speakers/adhila_noora.webp";
import sk from "../../public/speakers/siddique_kappan.webp";
import vv from "../../public/speakers/v_vigneshwari.webp";
import np from "../../public/speakers/adv_navaneeth_p.webp";

class Speaker {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Speaker_data = [
  new Speaker(
    "Adv. Navaneeth",
    "Get ready to meet the amazing Navaneeth Pavithran. He is a passionate lawyer who is empowering the masses through law. His mission is simple, yet powerful: to bring law to the common people. He believes that legal literacy is a tool of empowerment, a means to uplift individuals and communities. Join us as we explore the fascinating world of Navaneeth Pavithran, who is dedicated to spreading legal awareness and education among the public. Prepare to be inspired and enlightened by the brilliant lawyer who has a vision of a more just and inclusive society here at TEDxGECRIT.",
    np
  ),
  new Speaker(
    "V Vigneswari",
    "Meet the remarkable Ms. V Vigneswari IAS, a dynamic force currently serving as the Kottayam District Collector. Marked by her dedication to public service Ms. Vigneswari had earlier served as the managing director of KTDC and Director of Collegiate Education. Step into the extraordinary world of V. Vigneswari, a former TCS engineer turned public servant, passionately advocating for a nation rid of child labor and a person who seeks public opinion to shape change collaboratively. Brace yourselves to be inspired and amazed by the remarkable  IAS officer whose vision goes far beyond convention here at TEDxGECRIT.",
    vv
  ),
  new Speaker(
    "Siddique Kappan",
    "In the ever-evolving landscape of journalism, where the quest for truth often navigates through the labyrinth of paradoxes, one name stands out as a beacon of integrity and unwavering commitment – Siddique Kappan. A master storyteller, a guardian of the Fourth Estate, and a voice for the voiceless, Siddique's journey through the realm of journalism has been nothing short of extraordinary. Picture this: A journalist who doesn't merely report the news, but delves deep into the crux of stories, uncovering hidden layers of complexity that boggle the mind. Siddique's words have a way of unravelling paradoxes that surround us, exposing the heart of the matter with a rare blend of compassion and diligence.",
    sk
  ),
  new Speaker(
    "Adhila Nasarin",
    "Hailing from Aluva, Adhila has fearlessly taken on a fight against all odds to be reunited with her love. Adhila has found herself in a situation where she believes that seeking assistance from the police and the court is necessary to be able to live with the person she loves. Adhila's fight exemplifies the struggles that individuals in LGBTQ+ relationships sometimes face in seeking recognition, acceptance. Let us embrace her story as a testament to the enduring power of love and the strength of the human spirit. Let us hold our hands together for pride and be sure to show each of yours support on September 9, 2023.",
    an
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
