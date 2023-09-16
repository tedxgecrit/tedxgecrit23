
/**
 * Gallery image data;
 * Each key is a category and the value is an array of objects.
 * The arrays are the images.
 * 
 * The objects inside the array has two keys: src and alt.
 * - src: The path to the image
 * - alt: The alt text for the image
 */
// const GalleryData = {
// 	"Event wrap up": [
// 		{
// 			src: "",
// 			alt: "Some image"
// 		},

// 	],
// 	"Siddique Kappan": [

// 	],
// 	"Standup Shabari": [

// 	],
// 	"Anaswara Rajan": [

// 	],
// 	"8th December 2023": [

// 	]
// }

const GalleryData = {
  "Event wrap up": [
    {
      src: "https://picsum.photos/400/300?random=1",
      alt: "Image 1",
    },
    {
      src: "https://picsum.photos/400/300?random=2",
      alt: "Image 2",
    },
    {
      src: "https://picsum.photos/400/300?random=3",
      alt: "Image 3",
    },
    {
      src: "https://picsum.photos/400/300?random=4",
      alt: "Image 4",
    },
    {
      src: "https://picsum.photos/400/300?random=5",
      alt: "Image 5",
    },
  ],
  "Siddique Kappan": [
    {
      src: "https://picsum.photos/400/300?random=6",
      alt: "Image 6",
    },
    {
      src: "https://picsum.photos/400/300?random=7",
      alt: "Image 7",
    },
    {
      src: "https://picsum.photos/400/300?random=8",
      alt: "Image 8",
    },
    {
      src: "https://picsum.photos/400/300?random=9",
      alt: "Image 9",
    },
    {
      src: "https://picsum.photos/400/300?random=10",
      alt: "Image 10",
    },
  ],
  "Standup Shabari": [
    // Add 5 or more images with src and alt text
  ],
  "Anaswara Rajan": [
    // Add 5 or more images with src and alt text
  ],
  "8th December 2023": [
    // Add 5 or more images with src and alt text
  ],
};

export const GalleryDataKeys = Object.keys(GalleryData);


export default GalleryData;