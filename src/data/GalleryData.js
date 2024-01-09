//import anaswara from "public/gallery/adhila1.JPG"
/**
 * Gallery image data;
 * Each key is a category and the value is an array of objects.
 * The arrays are the images.
 *
 * The objects inside the array has two keys: src and alt.
 * - src: The path to the image
 * - alt: The alt text for the image
 */

const GalleryData = {
  "Anaswara Ramesh": [
    {
      src: "gallery/anaswara1.JPG",
      alt: "Anaswara Ramesh Image 1",
    },
    {
      src: "gallery/anaswara2.JPG",
      alt: "Anaswara Ramesh Image 2",
    },
    {
      src: "gallery/anaswara5.JPG",
      alt: "Anaswara Ramesh Image 3",
    },
    {
      src: "gallery/anaswara3.JPG",
      alt: "Anaswara Ramesh Image 4",
    },
    {
      src: "gallery/anaswara4.JPG",
      alt: "Anaswara Ramesh Image 5",
    },
  ],
  "Anoop Ambika": [
    {
      src: "gallery/anoop1.JPG",
      alt: "Anoop Ambika Image 1",
    },
    {
      src: "gallery/anoop2.JPG",
      alt: "Anoop Ambika Image 2",
    },
    {
      src: "gallery/anoop3.JPG",
      alt: "Anoop Ambika Image 3",
    },
    {
      src: "gallery/anoop4.JPG",
      alt: "Anoop Ambika Image 4",
    },
    {
      src: "gallery/anoop5.JPG",
      alt: "Anoop Ambika Image 5",
    },
  ],
  "Priyesh Gopalakrishnan": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/pri1.JPG",
      alt: "Priyesh G Image 1",
    },
    {
      src: "gallery/pri2.png",
      alt: "Priyesh G Image 2",
    },
    {
      src: "gallery/pri3.png",
      alt: "Priyesh G Image 3",
    },
    {
      src: "gallery/pri4.png",
      alt: "Priyesh G Image 4",
    },
    {
      src: "gallery/pri5.png",
      alt: "Priyesh G Image 5",
    },
  ],
  "Adhila Nasarin": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/adhila1.JPG",
      alt: "Adhila Nasarin Image 1",
    },
    {
      src: "gallery/adhila2.png",
      alt: "Adhila Nasarin Image 2",
    },
    {
      src: "gallery/adhila3.png",
      alt: "Adhila Nasarin Image 3",
    },
    {
      src: "gallery/adhila4.png",
      alt: "Adhila Nasarin Image 4",
    },
    {
      src: "gallery/adhila5.png",
      alt: "Adhila Nasarin Image 5",
    },
  ],
  "Siddique Kappan": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/sid1.JPG",
      alt: "Siddique Kappan Image 1",
    },
    {
      src: "gallery/sid2.JPG",
      alt: "Siddique Kappan Image 2",
    },
    {
      src: "gallery/sid3.JPG",
      alt: "Siddique Kappan Image 3",
    },
    {
      src: "gallery/sid4.JPG",
      alt: "Siddique Kappan Image 4",
    },
    {
      src: "gallery/sid5.JPG",
      alt: "Siddique Kappan Image 5",
    },
  ],
  "Adv. Navaneeth P": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/nav1.JPG",
      alt: "Navaneeth P Image 1",
    },
    {
      src: "gallery/nav2.JPG",
      alt: "Navaneeth P Image 2",
    },
    {
      src: "gallery/nav3.JPG",
      alt: "Navaneeth P Image 3",
    },
    {
      src: "gallery/nav4.JPG",
      alt: "Navaneeth P Image 4",
    },
    {
      src: "gallery/nav5.JPG",
      alt: "Navaneeth P Image 5",
    },
  ],
  "Event wrap-up": [
    // Add 5 or more images with src and alt
    {
      src: "gallery/wrap1.JPG",
      alt: "Event image 1",
    },
    {
      src: "gallery/wrap2.JPG",
      alt: "Event image 2",
    },
    {
      src: "gallery/wrap3.JPG",
      alt: "Event image 3",
    },
    {
      src: "gallery/wrap4.JPG",
      alt: "Event image 4",
    },
    {
      src: "gallery/wrap5.JPG",
      alt: "Event image 5",
    },
    {
      src: "gallery/wrap6.JPG",
      alt: "Event image 6",
    },
    {
      src: "gallery/wrap7.JPG",
      alt: "Event image 7",
    },
  ],
};

export const GalleryDataKeys = Object.keys(GalleryData);

export default GalleryData;
