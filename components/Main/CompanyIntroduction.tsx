import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
    img: LiveImage;
    heading_text: string;
    text_bold?: string;
    paragraph?: string;
    link?: string;
    link_title?: string;
  }

export default function CompanyIntroduction(props: Props) {
    return (
        <section class="container mx-auto grid md:grid-cols-2 md:flex-col grid-cols-1 min-h-[646px] relative mt-[15%] mx-[2%] relative md:(mx-auto mt-0) md:top-[46px] lg:top-[68.09px] place-items-center">
            <div class="col-span-1 min-h-[207.35px] md:min-h-[301.93px] mt-[38.447px] md:mt-[90px] ml-[3%] mr-[8%] md:(ml-[2%] mr-[8.1%]) lg:mt-[82.493px] px-0 md:px-[10px] pb-[10px] md:(ml-[5%] mr-[16%] pt-[10px] self-auto mt-0) lg:(self-start ml-0 mr-0 pt-0)">
              <h1 class="md:text-[44px] text-[28px] font-normal leading-[39.2px] md:leading-[51px] mb-[20px] text-[#081D54] lg:max-w-[82.9%] md:max-w-[358.52px]">{props.heading_text} <strong>{props.text_bold}</strong></h1>  
              <p class="mb-[20px] text-[18px] font-normal leading-[25px] text-[#081D54]">{props.paragraph}</p>    
              <a href={props.link} class="bg-[#00CE7C] font-medium text-white rounded-full md:text-[15px] min-w-[218.93px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block leading-[15px]">
                {props.link_title}
              </a>  
            </div>
            <Image class="object-cover col-span-1 md:(mb-[32%]) lg:(mb-[15%]) md:max-w-[75.5%] max-w-100% w-[100%]) self-auto" src={props.img} alt={"background"} width={440.02} height={500.7}/>
      </section>
    )
}