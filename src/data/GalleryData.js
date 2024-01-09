

//import anaswara from "public/gallery/adhila1.jpg"
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
      src: "gallery/anaswara1.jpg",
      alt: "Image 1",
    },
    {
      src: "gallery/anaswara2.jpg",
      alt: "Image 2",
    },
    {
      src: "gallery/anaswara5.jpg",
      alt: "Image 3",
    },
    {
      src: "gallery/anaswara3.jpg",
      alt: "Image 4",
    },
    {
      src: "gallery/anaswara4.jpg",
      alt: "Image 5",
    },
  ],
  "Anoop Ambika": [
    {
      src: "gallery/anoop1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/anoop2.jpg",
      alt: "Image 7",
    },
    {
      src: "gallery/anoop3.jpg",
      alt: "Image 8",
    },
    {
      src: "gallery/anoop4.jpg",
      alt: "Image 9",
    },
    {
      src: "gallery/anoop5.jpg",
      alt: "Image 10",
    },
  ],
  "Priyesh Gopalakrishnan": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/pri1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/pri2.png",
      alt: "Image 7",
    },
    {
      src: "gallery/pri3.png",
      alt: "Image 8",
    },
    {
      src: "gallery/pri4.png",
      alt: "Image 9",
    },
    {
      src: "gallery/pri5.png",
      alt: "Image 10",
    },
  ],
  "Adhila Nasarin": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/adhila1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/adhila2.png",
      alt: "Image 7",
    },
    {
      src: "gallery/adhila3.png",
      alt: "Image 8",
    },
    {
      src: "gallery/adhila4.png",
      alt: "Image 9",
    },
    {
      src: "gallery/adhila5.png",
      alt: "Image 10",
    },
  ],
  "Siddique Kappan": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/sid1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/sid2.jpg",
      alt: "Image 7",
    },
    {
      src: "gallery/sid3.jpg",
      alt: "Image 8",
    },
    {
      src: "gallery/sid4.jpg",
      alt: "Image 9",
    },
    {
      src: "gallery/sid5.jpg",
      alt: "Image 10",
    },
  ],
  "Adv. Navaneeth P": [
    // Add 5 or more images with src and alt text
    {
      src: "gallery/nav1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/nav2.jpg",
      alt: "Image 7",
    },
    {
      src: "gallery/nav3.jpg",
      alt: "Image 8",
    },
    {
      src: "gallery/nav4.jpg",
      alt: "Image 9",
    },
    {
      src: "gallery/nav5.jpg",
      alt: "Image 10",
    },
  ],
  "Event wrap-up": [
    // Add 5 or more images with src and alt 
    {
      src: "gallery/wrap1.jpg",
      alt: "Image 6",
    },
    {
      src: "gallery/wrap2.jpg",
      alt: "Image 7",
    },
    {
      src: "gallery/wrap3.jpg",
      alt: "Image 8",
    },
    {
      src: "gallery/wrap4.jpg",
      alt: "Image 9",
    },
    {
      src: "gallery/wrap5.jpg",
      alt: "Image 10",
    },
    {
      src: "gallery/wrap6.jpg",
      alt: "Image 9",
    },
    {
      src: "gallery/wrap7.jpg",
      alt: "Image 10",
    },
  ],
  
};

export const GalleryDataKeys = Object.keys(GalleryData);


export default GalleryData;