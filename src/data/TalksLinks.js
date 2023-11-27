const link1 = "https://youtu.be/Fzqb5V31hQ4";
// Navaneeth Krishna

const link2 = "https://youtu.be/uZ85TWCFg3I";
// Siddique Kappan

const link3 = "https://youtu.be/uUXHEpc3wYc";
// Anoop Ambika

const link4 = "https://youtu.be/Tzib16dAA0w";
// Anaswara

const link5 = "https://youtu.be/MwYi2GDFecU";
// Priyesh Gopalakrishnan

const link6 = "https://youtu.be/bysqCjn9n1c";
// Adhila Nasarin

class Talk {
  constructor(name, ytLink, imageLink) {
    this.name = name;
    this.ytLink = ytLink;
    this.imageLink = imageLink;
  }
}

export const TalksLinks = [
  new Talk("Navaneeth Krishna", link1, "/talks-thumbnails/navaneeth.webp"),
  new Talk("Siddique Kappan", link2, "/talks-thumbnails/kappan.webp"),
  new Talk("Anoop Ambika", link3, "/talks-thumbnails/anoop.webp"),
  new Talk("Anaswara", link4, "/talks-thumbnails/anaswara.webp"),
  new Talk("Priyesh Gopalakrishnan", link5, "/talks-thumbnails/priyesh.webp"),
  new Talk("Adhila Nasarin", link6, "/talks-thumbnails/adhila.webp"),
];
