import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

export type Links = {
  link: string;
  label: string;
};

export interface Props {
  img: LiveImage;
  alternativeText: string;
  width: number;
  height: number;
  maxWidth?: number;
  headingText: string;
  mobileHeadingText?: string;
  paragraph?: string;
  link: Links[];
}

export default function CompanyIntroduction(props: Props) {
  const [linksList] = useState<Array<Links>>(
    Array.isArray(props.link) ? props.link : [],
  );

  const validHTMLTags = /^(?!.*<\/?(?!b\b)\w+>).*$/;

  const paragraphHTML = validHTMLTags.test(props.paragraph ?? "")
    ? props.paragraph ?? ""
    : "";

  const headingText = validHTMLTags.test(props.headingText ?? "")
    ? props.headingText ?? ""
    : "";

  const mobileHeadingText = validHTMLTags.test(props.mobileHeadingText ?? "")
    ? props.mobileHeadingText ?? ""
    : "";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  });

  return (
    <section class="container mx-auto grid md:grid-cols-2 md:flex-col grid-cols-1 lg:min-h-[714.09px] lg:mt-0 relative md:mt-[15%] mt-[12%] relative md:(mx-auto) lg:top-[68.09px] place-items-center">
      <div class="col-span-1 min-h-[207.35px] md:min-h-[301.93px] lg:mt-[68.09px] px-0 md:px-[10px] pb-[10px] md:(pt-[10px] self-auto mr-0) lg:(self-start mx-0 pt-0)  md:mt-0 mt-[12%] mx-[13%]">
        <h1
          className="md:text-[38px] text-[24px] font-normal leading-[33.6px] md:leading-[51px] sm:max-w-[92%] mb-[20px] text-[#081D54] lg:max-w-[83.2%]"
          dangerouslySetInnerHTML={{
            __html: isMobile ? mobileHeadingText : headingText,
          }}
        >
        </h1>
        <p
          class="mb-[20px] md:text-[18px] text-[15px] font-normal md:leading-[25px] leading-[23px] text-[#545454]"
          dangerouslySetInnerHTML={{ __html: paragraphHTML }}
        >
        </p>
        {linksList.filter((props) => props.link).length > 0 && (
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {linksList.map((props) => (
              <a
                href={props.link}
                class="bg-[#00CE7C] font-medium text-white rounded-full md:text-[15px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block leading-[15px]"
                style={{ width: "fit-content" }}
              >
                {props.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div class="md:mx-auto mx-[4%] flex justify-center mb-[15%] relative">
        <Image
          class={`object-cover col-span-1 lg:(mb-[15%]) md:max-w-[${props.maxWidth}%] max-w-100% w-[100%]) self-auto`}
          src={props.img}
          alt={props.alternativeText}
          width={props.width}
          height={props.height}
        />
      </div>
    </section>
  );
}
