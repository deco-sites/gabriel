import { useEffect, useRef, useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  slider: Array<LiveImage>;
  alt: string;
}

export default function Carousel(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: 0,
    right: 0,
    width: 0,
    height: 0,
  });
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideWidth = 186.667;
  const slideHeight = 70.4;
  const numSlidesToShow = window.innerWidth > 768 ? 6 : 3;
  const slideWidthPercent = 100 / numSlidesToShow;
  const slides = [...props.slider];
  const firstSlides = slides.slice(
    slides.length - numSlidesToShow,
    slides.length,
  );
  const lastSlides = slides.slice(0, numSlidesToShow);
  slides.unshift(...firstSlides);
  slides.push(...lastSlides);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % (slides.length - numSlidesToShow));
      const container = sliderRef.current?.parentElement;
      if (container) {
        const rect = container.getBoundingClientRect();
        setContainerOffset({
          left: rect.left,
          right: rect.right,
          width: rect.width,
          height: rect.height,
        });
        const slider = sliderRef.current;
        if (slider) {
          slider.style.transition = "transform 0s";
          const viewportCenter = window.innerWidth / 2;
          const containerCenter = containerOffset.left +
            containerOffset.width / 2;
          const sliderOffset = containerCenter - viewportCenter -
            currentIndex * slideWidth;
          slider.style.transform = `translateX(-${sliderOffset}px)`;
          setTimeout(() => {
            slider.style.transition = "transform 0.5s ease";
            slider.style.transform = `translateX(-${
              currentIndex * slideWidth
            }px)`;
          }, 0);
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, numSlidesToShow, containerOffset]);

  return (
    <div class="overflow-x-hidden whitespace-nowrap container mx-auto md:w-[93vw] w-[89vw] p-[10px] mb-[2%]">
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          width: `${slides.length * slideWidthPercent}%`,
        }}
      >
        {slides.map((img, index) => (
          <div key={index} class="min-w-[100px]">
            <Image
              class="object-cover"
              src={img}
              alt={props.alt}
              width={slideWidth}
              height={slideHeight}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
