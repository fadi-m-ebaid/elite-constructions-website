"use client";
import React, { useState, useEffect } from "react";
import { BaseType, StyleType } from "@/types/baseTypes";
import Image from "next/image";
import ArrowSVG from "@/assetsComponents/Arrow.svg";


export interface SlideItem extends BaseType {
  img?: string;
  title?: string;
  shortDesc?: string;
}

type Props = {
  items: SlideItem[]; // 🔹 Dynamic class name for different styles
  style?: StyleType & {
    interval?: number;
    extraSlides?: number;
  };
};

export default function Slider({ items, style }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, style?.interval || 3000);
    return () => clearInterval(interval);
  }, [items.length, style?.interval]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getClassName = (index: number) => {
    if (index === activeIndex)
      return `${style?.className}-active-slide active-slide`;

    const totalSlides =  style?.extraSlides || 1;
    for (let i = 1; i <= totalSlides; i++){
      if (index === (activeIndex - i + items.length) % items.length)
        return `${style?.className}-prev${i}-slide prev${i}-slide`;
      if (index === (activeIndex + i) % items.length)
        return `${style?.className}-next${i}-slide next${i}-slide`;
    }
    
    return `${style?.className}-hidden-slide hidden-slide`;
  };

  return (
    <div className={`custom-carousel-container ${style?.className}`}>
      {/* 🔹 Left Arrow Button */}
      <button
        className={`carousel-arrow left-arrow ${style?.className}-arrow`}
        onClick={handlePrev}
      >
        <ArrowSVG
          className={`${style?.className}-arrow-icon`}
          width={80}
          height={80}
        />
      </button>

      <div className={`custom-slider ${style?.className}-slider`}>
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`${getClassName(index)} ${style?.className}-item`}
          >
            <div
              className={`${style?.className}-slider-wrapper slider-wrapper`}
            >
              <img loading="lazy"
                src={item.img || "" || "/placeholder.png"}
                alt={item?.title || "Slide Image"}
                width={300}
                height={300}
                className={`slider-image ${style?.className}-image`}
              />
              {item.title && (
                <h3 className={`slider-title ${style?.className}-title`}>
                  {item.title}
                </h3>
              )}
              {item.shortDesc && (
                <p className={`slider-desc ${style?.className}-desc`}>
                  {item.shortDesc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Right Arrow Button */}
      <button
        className={`carousel-arrow right-arrow ${style?.className}-arrow`}
        onClick={handleNext}
      >
        <ArrowSVG
          className={`${style?.className}-arrow-icon`}
          width={80}
          height={80}
        />
      </button>
    </div>
  );
}
