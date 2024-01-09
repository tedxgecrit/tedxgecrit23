import GalleryData, { GalleryDataKeys } from "@/data/GalleryData";
import GallerySection from "./GallerySection";

const Gallery = () => {
  if (!GalleryData) return null;
  return (
    <section className="mx-4 border-l-2 border-white border-opacity-50 pl-4">
      {GalleryDataKeys.map((value, index) => {
        let data = GalleryData[value];
        return <GallerySection name={value} imageData={data} key={index} />;
      })}
    </section>
  );
};

export default Gallery;
