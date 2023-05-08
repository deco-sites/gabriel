import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Card = {
    img: LiveImage;
    alt: string;
    title: string;
    paragraph: string;
    link: string;
    link_title: string;
  };

export interface Props {
  title: string;
  paragraph: string;
  img: LiveImage;
  alt: string;
  cards: Card[];
}

export default function FirstSteps(props: Props) {
    const [cardsList] = useState<Array<Card>>(
        Array.isArray(props.cards) ? props.cards : [],
      );
  return (
    <section class="container mx-auto flex flex-col">
        <div class="lg:mx-0 md:mx-[2%] flex flex-col justify-center">
            <div class="md:px-[0] md:py-[10px] px-[4%]">
                <div class="px-[10px] md:px-0">
                    <h2 class="text-[#081D54] font-bold md:text-[32px] text-[22px] mb-[20px]">
                    {props.title}
                    </h2>
                    <p class="font-normal text-[#081D54] md:text-[18px] text-[16px] pr-[13%] mb-[2%] md:mb-0">
                    {props.paragraph}
                    </p>
                </div>
            </div>
            <div class="flex items-center md:flex-row flex-col text-center md:text-left shadow-custom lg:(pr-[10px] pl-[20px] py-[20px]) p-[10px] rounded-[16px] md:mt-[2%] m-[8%] md:m-0">
                <div class="lg:(pl-[12.06%] pr-[13%]) md:py-[2.5%] py-[21.48px]">
                    <Image src={props.img} class="lg:p-0 md:p-[10px] lg:max-w-[270.02px] md:max-w-[329px] max-w-[114.63px]" alt={props.title} width={329} height={193} />
                </div>
                <div class="flex flex-col flex-1">
                    <p class="text-[#081D54] text-[32px] font-semibold md:mb-[20px] mb-0 leading-none">Camaleão</p>
                    <p class="text-[#081D54] md:text-[18px] text-[16px] md:pt-0 pt-[8.4%] Roboto-Regular leading-none md:mb-0 mb-[6%]">Inteligente, integrado e com visão 180°.</p>
                </div>
            </div>
        </div>
        {cardsList.filter((props) => props.link).length > 0 && (
          <div class="p-[10px] container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[4%]">
            {cardsList.map((props) => (
                <article class="md:pr-[22%] md:pl-[5%] sm:px-[14%] px-[10%] grid gap-y-[20px]">
                    <div class="md:min-h-[96.66px] min-h-[85px] flex md:items-end md:justify-left justify-center">
                        <Image src={props.img} class="object-cover lg:w-[35.046%] sm:(w-[54.15%] max-w-[128px]) min-w-[86.86px] w-[15.99%]" alt={props.alt} width={92.78} style={{ height: 'fit-content' }}/>
                    </div>
                    <h3 class="text-[#081D54] text-[24px] font-bold leading-[8.12px] text-center md:text-left">{props.title}</h3>             
                    <p class="text-[#081D54] font-normal text-[16px] leading-[22.4px] text-center md:text-left">{props.paragraph}</p>
                    <a href={props.link}
                        class="bg-[#00CE7C] font-medium text-white rounded-full md:text-[15px] sm:w-max break-words sm:h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold leading-[15px] sm:m-0 mx-auto" style={{ height: 'fit-content' }}>
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