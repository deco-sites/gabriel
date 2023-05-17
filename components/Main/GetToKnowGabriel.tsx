import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  text: string;
  img: LiveImage;
  alt: string;
  link: string;
  button_title: string;
}

export default function GetToKnowGabriel(props: Props) {
  return (
    <section class="bg-[#E5ECF8]">
      <div class="container mx-auto md:p-0 pt-[8%]">
        <div class="p-[10px] grid grid-cols-1 md:grid-cols-2 md:justify-between">
          <div class="md:grid flex flex-col justify-center items-center gap-[20px] md:m-auto sm:mx-[7%] m-0 md:pr-[21%]">
            <h2 class="md:text-[28px] text-[24px] font-semibold text-[#081D54] leading-none md:text-left text-center sm:m-0 mx-[15%]">
              {props.title}
            </h2>
            <p class="font-normal text-[#081D54] md:text-[18px] text-[16px] md:text-left text-center sm:m-0 mx-[7%]">
              {props.text}
            </p>
            <a
              href={props.link}
              class="bg-[#00CE7C] text-white rounded-full md:text-[15px] w-max break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block leading-[15px]"
              style={{ height: "fit-content" }}
            >
              {props.button_title}
            </a>
          </div>
          <div class="flex p-[10px]">
            <figure class="md:(py-[8%] px-[14.6%]) sm:(py-[6%] px-[15.634%]) p-[6%]">
              <Image
                class="object-cover rounded-[15px] mx-auto self-auto md:w-auto w-full"
                src={props.img}
                alt={props.alt}
                width={367.90}
                height={278.85}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
