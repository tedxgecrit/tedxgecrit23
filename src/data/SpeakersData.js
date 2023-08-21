import aa from "../../public/speakers/anoop_ambika.webp";

class Speaker {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Speaker_data = [
  new Speaker(
    "V Vigneswari",
    "Meet the remarkable Ms. V Vigneswari IAS, a dynamic force currently serving as the Kottayam District Collector. Marked by her dedication to public service Ms. Vigneswari had earlier served as the managing director of KTDC and Director of Collegiate Education. Step into the extraordinary world of V. Vigneswari, a former TCS engineer turned public servant, passionately advocating for a nation rid of child labor and a person who seeks public opinion to shape change collaboratively. Brace yourselves to be inspired and amazed by the remarkable  IAS officer whose vision goes far beyond convention here at TEDxGECRIT.",
    aa
  ),
  new Speaker(
    "Anoop Ambika",
    "Anoop P Ambika is the Chief Executive Officer at Kerala Startup Mission. He is  a multifaceted personality renowned as a serial entrepreneur and fervent technology enthusiast, a former CEO of Genpro Research and Cognub Decision Solutions. Anoop P Ambika is no ordinary speaker, co-founder of cutting-edge startups, Anoop's insights transcend conventional boundaries and is currently responsible for leading the development and execution of Kerala Startup Mission's decision sciences product and services strategy using AI and advanced analytics. Prepare to be captivated on September 9th with an exhilarating dive into the dynamic intersections of technology, entrepreneurship and decision sciences with him at TedxGECRIT.",
    aa
  ),

  new Speaker("Anaswara Ramesh", "", aa),
];
