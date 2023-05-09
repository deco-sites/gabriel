import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Card = {
  img: LiveImage;
  alt: string;
  title: string;
  paragraph: string;
};

export interface Props {
  img: LiveImage;
  alt: string;
  title: string;
  paragraph: string;
  cards: Card[];
}

export default function AboutSecurity(props: Props) {
  const [cardsList] = useState<Array<Card>>(
    Array.isArray(props.cards) ? props.cards : [],
  );
  return (
    <section class="container mx-auto flex flex-col md:p-[10px] mt-[5%] sm:px-[5.3%] px-[7.12%]">
      <div class="flex flex-col justify-center gap-y-[20px]">
        <h2 class="text-[#081D54] md:text-[32px] text-[22px] font-bold leading-none">
          {props.title}
        </h2>
        <p class="text-[#081D54] md:text-[18px] text-[16px] font-normal pr-[15%] leading-[22.4px]">
          {props.paragraph}
        </p>
        <Image
          src={props.img}
          class="mx-auto h-auto max-w-[100%] md:w-[50%] w-[100%] sm:p-0 p-[5%]"
          alt={props.alt}
          width={329}
          height={193}
        />
      </div>
      {cardsList.filter((props) => props).length > 0 && (
        <div class="lg:(pl-[30px] pr-[48px] py-[10px]) md:p-[10px] pb-[12.25%] container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6 md:pt-0 pt-[4%]">
            {cardsList.map((props) => (
              <article class="pb-[6%] pt-[4%] pl-[6%] pr-[7%] grid shadow-about-security flex flex-col justify-between rounded-[15px]">
                <div class="flex md:items-end justify-left lg:max-h-[64.56px] sm:max-h-[123.31px] max-h-[54.45px]">
                  <Image
                    src={props.img}
                    class="object-contain h-[100%] max-w-fit pb-[5px]"
                    alt={props.alt}
                    width={92.78}
                    style={{ maxWidth: "fit-content" }}
                  />
                </div>
                <h3 class="text-[#081D54] text-[25px] font-semibold leading-none md:mt-0 mt-[10px] pb-[8px]">
                  {props.title}
                </h3>
                <p class="text-[#081D54] font-normal text-[16px] leading-none Roboto-Regular">
                  {props.paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
