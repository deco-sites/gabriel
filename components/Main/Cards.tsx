import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Card = {
  img: LiveImage;
  width_img_desktop: string;
  width_img_tablet: string;
  width_img_mobile: string;
  alt: string;
  title: string;
  paragraph: string;
  link: string;
  link_title: string;
};

export interface Props {
  cards: Card[];
}

export default function Cards(props: Props) {
  const [cardsList] = useState<Array<Card>>(
    Array.isArray(props.cards) ? props.cards : [],
  );
  return (
    <section class="container mx-auto flex flex-col my-[7%]">
      {cardsList.filter((props) => props.link).length > 0 && (
        <div class="p-[10px] container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[4%]">
            {cardsList.map((props) => (
              <article class="md:pr-[22%] md:pl-[5%] pb-0 sm:(px-[14%] pb-[7%]) px-[10%] grid gap-y-[20px]">
                <div class="md:min-h-[96.66px] min-h-[85px] flex items-end justify-left">
                  <Image
                    src={props.img}
                    class={`object-cover lg:w-[${props.width_img_desktop}] sm:(w-[${props.width_img_tablet}]) w-[${props.width_img_mobile}]`}
                    alt={props.alt}
                    width={92.78}
                    style={{ height: "fit-content" }}
                  />
                </div>
                <h3 class="text-[#081D54] md:text-[24px] text-[20px] font-bold leading-none text-left">
                  {props.title}
                </h3>
                <p class="text-[#545454] font-normal md:text-[16px] text-[15px] md:leading-[22.4px] leading-[20px] text-left">
                  {props.paragraph}
                </p>
                <a
                  href={props.link}
                  class="bg-[#00CE7C] font-medium text-white rounded-full md:text-[15px] sm:w-max break-words sm:h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold leading-[15px] sm:m-0 mx-auto"
                  style={{ height: "fit-content" }}
                >
                  {props.link_title}
                </a>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
