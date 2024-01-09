"use client";
import Image from "next/image";
import { useRef, useState, memo } from "react";

const GallerySection = ({ name, imageData }) => {
  let [previewVisible, setPreviewVisible] = useState(false);
  let [previewImage, setPreviewImage] = useState("");

  const hidePreview = () => {
    setPreviewVisible(false);
    setPreviewImage("");
  };

  return (
    <>
      <section className="mb-14">
        <h2 className="mb-6 text-white text-opacity-70">{name}</h2>
        <div className="flex flex-wrap gap-4">
          {imageData.map((value) => {
            let img = useRef(null);
            return (
              <Image
                width={800}
                height={800}
                src={`/${value.src}`}
                className="aspect-square min-w-[100px] max-w-[200px] flex-[20%] cursor-pointer rounded-md bg-grey object-cover transition-all duration-300 ease-in-out hover:scale-105"
                key={value.src}
                alt={value.alt || "image gallery pzhoto"}
                ref={img}
                onClick={() => {
                  setPreviewImage(img.current.src);
                  setPreviewVisible(true);
                }}
              />
            );
          })}
        </div>
      </section>

      {previewVisible && (
        <div className="animate-fade fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70">
          <div className="absolute inset-0 z-10" onClick={hidePreview}></div>
          <button
            className="absolute right-10 top-10 z-20"
            aria-label="close"
            onClick={hidePreview}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          <Image
            width={800}
            height={800}
            alt="Image preview"
            className="absolute z-20 h-auto max-h-[80%] w-auto max-w-[80%] duration-200"
            src={previewImage}
          />
        </div>
      )}
    </>
  );
};

export default memo(GallerySection);
