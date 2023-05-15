import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  paragraph: string;
  img: LiveImage;
  alt: string;
  name_product: string;
  about_product: string;
}

export default function FirstSteps(props: Props) {
  return (
    <section class="container mx-auto flex flex-col">
      <div class="lg:mx-0 md:mx-[2%] flex flex-col justify-center">
        <div class="md:px-[0] md:py-[10px] px-[4%]">
          <div class="md:px-[10px] sm:px-0">
            <h2 class="text-[#081D54] font-bold md:text-[32px] text-[22px] mb-[20px]">
              {props.title}
            </h2>
            <p class="font-normal text-[#081D54] md:text-[18px] text-[16px] pr-[13%] mb-[2%] md:mb-0">
              {props.paragraph}
            </p>
          </div>
        </div>
        <div class="flex items-center md:flex-row flex-col text-center md:text-left shadow-first-steps lg:(pr-[10px] pl-[20px] py-[20px]) p-[10px] rounded-[16px] md:mt-[2%] m-[8%] sm:(my-[8%] mt-[8%] mb-[7%]) md:m-0">
          <div class="md:(pl-[12.06%] pr-[13%]) sm:py-[2.5%] py-[21.48px]">
            <Image
              src={props.img}
              class="lg:p-0 md:p-[10px] lg:max-w-[270.02px] sm:max-w-[329px] md:max-w-[179.63px] max-w-[114.63px]"
              alt={props.title}
              width={329}
              height={193}
            />
          </div>
          <div class="flex flex-col flex-1">
            <p class="text-[#081D54] text-[32px] font-semibold md:mb-[20px] mb-0 leading-none">
              {props.name_product}
            </p>
            <p class="text-[#081D54] md:text-[18px] text-[16px] md:pt-0 pt-[8.4%] Roboto-Regular leading-none md:mb-0 mb-[6%]">
              {props.about_product}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
