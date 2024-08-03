import { useEffect, useRef, useState } from "react";

// Array of image sources
const imageSources = [
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_150.jpg",
  "https://cdn.pixabay.com/photo/2021/09/13/08/16/purple-flower-6620617_150.jpg",
  "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_150.jpg",
  "https://cdn.pixabay.com/photo/2023/12/16/00/06/mountain-8451604_150.jpg",
  "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_150.jpg",
  "https://cdn.pixabay.com/photo/2023/10/29/13/21/waterfall-8350178_150.jpg",
  "https://cdn.pixabay.com/photo/2023/11/03/11/49/autumn-8362844_150.jpg",
  "https://cdn.pixabay.com/photo/2023/04/10/15/12/succulent-7914023_150.jpg",
  "https://cdn.pixabay.com/photo/2023/01/06/13/45/coast-7701281_150.jpg",
  "https://cdn.pixabay.com/photo/2022/12/01/22/02/bird-7629852_150.jpg",
];

const AutoScrollImages = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && isVisible) {
        containerRef.current.scrollLeft =
          window.scrollY % containerRef.current.scrollWidth;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-32 p-4 no-scrollbar"
          style={{
            whiteSpace: "nowrap",
            position: "relative",
            scrollBehavior: "smooth",
          }}
        >
          {imageSources.map((src, index) => (
            <div key={index} className="w-64 h-44 flex-shrink-0">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
          {imageSources.map((src, index) => (
            <div key={`copy-${index}`} className="w-64 h-44 flex-shrink-0">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full rounded-3xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollImages;
