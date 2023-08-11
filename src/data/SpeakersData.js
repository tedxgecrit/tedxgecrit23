import speaker1 from "../../public/speakers/s1.webp";
import speaker2 from "../../public/speakers/s2.webp";
import speaker3 from "../../public/speakers/s3.webp";
import speaker4 from "../../public/speakers/s4.webp";
import speaker5 from "../../public/speakers/s5.png";

class Speaker {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export const Speaker_data = [
  new Speaker(
    "Sunil Chetri",
    "Sunil Chetri is an Indian professional footballer who plays as a forward and captains both Indian Super League club Bengaluru and the India national team.He is known for his link - up play, goal scoring abilities, and leadership.Chhetri received the Arjuna Award in 2011 for his outstanding sporting achievement, the Padma Shri award in 2019, India's fourth highest civilian award. In 2021, he received the Khel Ratna Award, India's highest sporting honor and became the first footballer to receive the award.",
    speaker1
  ),
  new Speaker(
    "Lionel Messi",
    "Lionel Messi is an Argentine footballer widely considered one of the greatest players in history. Known for his extraordinary skills, goal-scoring ability, and playmaking vision, he achieved numerous records during his illustrious career at FC Barcelona. In 2021, he joined Paris Saint-Germain, continuing to captivate fans worldwide with his brilliance on the field. The six-time Ballon d'Or winner has won 10 La Liga titles, 4 UEFA Champions League titles, and 6 Copa del Rey titles with FC Barcelona. He has also won the Copa America with Argentina in 2021.",
    speaker2
  ),
  new Speaker(
    "Cristiano Ronaldo",
    "Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaldu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards[note 3] and four European Golden Shoes, the most by a European player. He has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League.",
    speaker3
  ),
  new Speaker(
    "Ronaldhino Gaugo",
    "Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho Gaúcho (Brazilian Portuguese: [ʁonawˈdʒĩɲu ɡaˈuʃu]) or simply Ronaldinho,[note 1] is a Brazilian retired professional footballer who played mostly as an attacking midfielder, but was also deployed as a winger. Widely regarded as one of the greatest players of all time, he won two FIFA World Player of the Year awards and a Ballon d'Or. He is the only player ever to have won a World Cup, a Copa América, a Confederations Cup, a Champions League, a Copa Libertadores and a Ballon d'Or.",
    speaker4
  ),
  new Speaker(
    "Johan Cryuff",
    "Hendrik Johannes Cruijff  internationally known as Johan Cruyff; 25 April 1947 – 24 March 2016) was a Dutch professional football player and manager. Regarded as one of the greatest players of all time, and as the greatest Dutch footballer ever, he won the Ballon d'Or three times, in 1971, 1973, and 1974.[4] Cruyff was a proponent of the football philosophy known as Total Football explored by Rinus Michels, which Cruyff also employed as a manager.",
    speaker5
  ),
];
