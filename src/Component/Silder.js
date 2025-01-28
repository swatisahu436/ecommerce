import { useState, useEffect, useCallback } from "react";

const Slider = () => {
  const slidimg = [
    "https://5.imimg.com/data5/AX/DR/AB/SELLER-9561275/interactive-graphic-design-service-1000x1000.jpg",
    "https://5.imimg.com/data5/AX/DR/AB/SELLER-9561275/interactive-graphic-design-service-1000x1000.jpg",
  ];
  const [index, setIndex] = useState(0);

  // Memoize the nextImage function
  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % slidimg.length);
  }, [slidimg.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]); // Include nextImage in the dependency array

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "500px",
        
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slidimg.map((x, idx) => (
          <img
            key={idx}
            src={x}
            alt={"sorry"}
            style={{   minWidth: "100%",height:'500px', objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
