'use client'

import React, { useRef, useEffect, useState } from "react";
const ImageComparison = ({ img1, img2, width, height }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [imgWidth, setImgWidth] = useState(width / 2);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  const handleMouseMove = (e) => {
    if (!clicked) return;
    const pos = getCursorPos(e);
    updateImageWidth(pos);
  };

  const getCursorPos = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left - window.pageXOffset;
    return Math.max(0, Math.min(x, width));
  };

  const updateImageWidth = (x) => {
    setImgWidth(x);
    if (sliderRef.current) {
      sliderRef.current.style.left = `${x - sliderRef.current.offsetWidth / 2}px`;
    }
  };

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (!clicked) return;
      const pos = getCursorPos(e.touches[0]);
      updateImageWidth(pos);
    };

    const handleWindowMouseUp = () => {
      setClicked(false);
    };

    window.addEventListener("mouseup", handleWindowMouseUp);
    window.addEventListener("touchend", handleWindowMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("touchend", handleWindowMouseUp);
    };
  }, [clicked]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* Background Image - img2 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={img2}
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Foreground Image - img1 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${width - imgWidth}px 0 0)`,
        }}
      >
        <img
          src={img1}
          alt="Foreground"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          position: "absolute",
          zIndex: 9,
          cursor: "ew-resize",
          width: "40px",
          height: "40px",
          backgroundColor: "#2196f3",
          opacity: 0.7,
          borderRadius: "50%",
          top: `${height / 2 - 20}px`,
          left: `${imgWidth - 20}px`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      ></div>
    </div>
  );
};



function PageJS() {
  return (
    <ImageComparison
      img1="https://imgs.search.brave.com/lBV_paBeRk0D_KSR2O4_jHEzUHWEd-RfTQ30e_rrFjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/NDc5MjA0NS9waG90/by9kb2ctaGF2aW5n/LWEtYmF0aC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VjIw/UUFQcHRHNHhIMTlt/RWxxT3NCOExxR2tp/YXhCeE1FZC00M05f/YThBRT0"
      img2="https://burst.shopifycdn.com/photos/smiling-man-woman-pug.jpg?width=1850&format=pjpg&exif=0&iptc=0 2x" 
      width={900} height={100}
    />
  )
}

export default PageJS;
