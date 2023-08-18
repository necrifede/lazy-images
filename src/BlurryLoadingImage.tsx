import { FC, useEffect, useState } from "react";

interface BlurryType {
  preview: string;
  image: string;
  alt: string;
  imageStyleClass: string;
  divStyleClass: string;
  bgColor: string;
}

const BlurryLoadingImage: FC<BlurryType> = ({
  preview,
  image,
  alt,
  imageStyleClass,
  divStyleClass,
  bgColor = "transparent",
}) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src: string) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, [image]);

  return (
    <div className={divStyleClass} style={{ overflow: "hidden" }}>
      <img
        style={{
          filter: `${loading ? "blur(20px)" : ""}`,
          transition: "1s filter linear",
          width: "100%",
          background: bgColor,
        }}
        src={currentImage}
        alt={alt}
        className={imageStyleClass}
      />
    </div>
  );
};

export default BlurryLoadingImage;
