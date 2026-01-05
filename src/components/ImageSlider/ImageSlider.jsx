import { useEffect, useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ images = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images, interval]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : "inactive"}
        />
      ))}
    </div>
  );
}
