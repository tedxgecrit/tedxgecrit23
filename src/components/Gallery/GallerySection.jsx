"use client";
import { useRef, useState, memo } from "react";

const GallerySection = ({ name, imageData }) => {
	let [previewVisible, setPreviewVisible] = useState(false);
	let [previewImage, setPreviewImage] = useState("");

	const hidePreview = () => { setPreviewVisible(false); setPreviewImage(""); }


	return (
		<>
			<section className="mb-14">
				<h2 className="text-white text-opacity-70 mb-6">{name}</h2>
				<div className="flex flex-wrap gap-4">
					{
						imageData.map((value) => {
							let img = useRef(null)
							return (
								<img
									key={value.src}
									className="flex-[20%] aspect-square max-w-[200px] min-w-[100px] bg-grey rounded-md object-cover"
									src={value.src}
									alt={value.alt || "image gallery photo"}
									ref={img}
									onClick={() => {
										setPreviewImage(img.current.src);
										setPreviewVisible(true);
									}}
								/>
							)
						})
					}
				</div>
			</section>

			{
				previewVisible && (
					<div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center ">
						<div className="absolute inset-0 z-10" onClick={hidePreview}></div>
						<button className="absolute top-10 right-10 z-20" aria-label="close" onClick={hidePreview}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<path d="M18 6l-12 12"/>
								<path d="M6 6l12 12"/>
							</svg>
						</button>
						<img className="max-w-[80%] max-h-[80%] absolute z-20" src={previewImage} />
					</div>
				)
			}
		</>
	);
}

export default memo(GallerySection);