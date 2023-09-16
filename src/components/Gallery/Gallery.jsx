
import GalleryData, { GalleryDataKeys } from "@/data/GalleryData";
import GallerySection from "./GallerySection";


const Gallery = () => {
	return (
		<section className="border-l-2 border-white border-opacity-50 pl-4 mx-4">
			{
				GalleryDataKeys.map((value, index) => {
					let data = GalleryData[value];
					return <GallerySection name={value} imageData={data} key={index} />
				})
			}
		</section>
	)
}


export default Gallery;