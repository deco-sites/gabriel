import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Table = {
  img: LiveImage;
  width_container?: number;
  width_percentage_desktop?: number;
  width_percentage_tablet?: number;
  width_percentage_mobile?: number;
  width: number;
  height: number;
  alt: string;
  service: string;
  text: string;
};

export interface Props {
  tables: Table[];
}

export default function Table(props: Props) {
  const [tableList] = useState<Array<Table>>(
    Array.isArray(props.tables) ? props.tables : [],
  );

  return (
    <section class="container mx-auto p-[10px]">
      {tableList.filter((tables) => tables.text).length > 0 && (
        <>
          {tableList.map((props, index) => (
            <div
              class={`grid grid-cols-1 md:grid-cols-2 items-center md:px-[10px] sm:px-[16px] px-[20px] sm:pt-0 pt-[10px] md:mx-0 mx-[20px] md:mb-[19px] mb-0 ${
                index !== tableList.length - 1
                  ? "border-b border-[#BCBCBC]"
                  : ""
              }`}
            >
              <div class="flex md:flex-row flex-col md:items-center flex-start md:mt-[20px] mt-[15px] md:mb-[27px] mb-0 md:p-0 px-[10px] pb-[10px]">
                <div
                  class={`mt-[-7px] md:w-[${props.width_container}%]`}
                >
                  <Image
                    src={props.img}
                    class={`object-cover md:mb-0 mb-[20px] md:w-[${props.width_percentage_desktop}%] sm:w-[${props.width_percentage_tablet}%]  w-[${props.width_percentage_mobile}%]`}
                    alt={props.alt}
                    width={props.width}
                    height={props.height}
                    style={{ height: "fit-content" }}
                  />
                </div>
                <div class="w-[90%]">
                  <h4 class="leading-none text-[24px] text-[#081D54] font-normal">
                    {props.service}
                  </h4>
                </div>
              </div>
              <div class="md:p-[10px] px-[10px] pb-[10px] pt-[5px] mb-[14.400px]">
                <p class="text-[#545454] md:text-[16px] text-[15px] sm:leading-[24px] leading-[22.5px]">
                  {props.text}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
