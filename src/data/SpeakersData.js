import speaker1 from "../../public/speakers/s1.webp";
import speaker2 from "../../public/speakers/s2.webp";
import speaker3 from "../../public/speakers/s3.webp";
import speaker4 from "../../public/speakers/s4.webp";
import speaker5 from "../../public/speakers/s5.webp";

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
    "Cristiano Ronaldo, a Portuguese football phenomenon, stands as one of the most recognizable and accomplished athletes in the history of the sport. Born on February 5, 1985, his journey from humble beginnings to global stardom is a testament to his unparalleled work ethic and unwavering dedication. Ronaldo's skill set is a blend of incredible speed, exceptional dribbling, pinpoint accuracy in shooting, and remarkable aerial ability. He has won numerous titles with clubs like Manchester United, Real Madrid, and Juventus, and is the all-time top scorer in the UEFA Champions League.",
    speaker3
  ),
  new Speaker(
    "Wayne Rooney",
    "Wayne Rooney, a renowned English footballer, has left an indelible mark on the world of soccer through his exceptional talent, dedication, and achievements. Born on October 24, 1985, Rooney's journey began at a young age, displaying extraordinary skills that led him to make his professional debut for Everton at just 16 years old. His prolific goal-scoring abilities and versatility on the field caught the attention of Manchester United, where he enjoyed the prime of his career. Rooney's time at United was adorned with numerous titles.",
    speaker4
  ),
  new Speaker(
    "Ruud Van Nistelrooy",
    "Ruud van Nistelrooy, a Dutch football icon, is celebrated for his exceptional goal-scoring prowess and clinical finishing ability. Born on July 1, 1976, he rose to prominence during his time at clubs like PSV Eindhoven and Manchester United. Van Nistelrooy's reputation as a lethal striker was solidified during his five-year spell at Manchester United, where he consistently found the back of the net with astonishing regularity. He is the fourth-highest goal scorer in the history of the Premier League, with 95 goals in 150 appearances.",
    speaker5
  ),
];
