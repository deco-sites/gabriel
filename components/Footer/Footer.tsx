import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface Props {
  contents: Contents[];
}

export type Contents = {
  footerLinks: FooterLinks[];
  social_media_title?: SocialMediaTitle[];
  social_media?: SocialMedia[];
};

export type FooterLinks = {
  footer_links_name?: string;
  footer_links_link?: string;
  has_underline?: boolean;
};

export type SocialMediaTitle = {
  text?: string;
  text_bold?: string;
};

export type SocialMedia = {
  img: LiveImage;
  alt: string;
  social_media_link?: string;
};

export default function Footer(props: Props) {
  const [footerLinks] = useState(
    Array.isArray(props.contents[0].footerLinks)
      ? props.contents[0].footerLinks
      : [],
  );

  const [socialMediaLinks] = useState(
    Array.isArray(props.contents[0].social_media)
      ? props.contents[0].social_media
      : [],
  );

  return (
    <footer class="bottom-0 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 md:(justify-between items-center) container mx-auto">
        <div class="md:(pl-[10px] m-0) mx-[15%] order-last md:order-first">
          <ul class="flex flex-col gap-y-[14.400px] mt-[35px] mb-[14.400px]">
            {footerLinks.map((links: FooterLinks, index: number) => (
              <li key={index} class="text-[#081D54] font-bold">
                <a
                  target="_blank"
                  rel="noopener"
                  href={links.footer_links_link}
                  class={links.has_underline ? "underline" : "no-underline"}
                >
                  {links.footer_links_name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="md:(ml-[22%] pt-0 pb-[14%]) pt-[22%] order-first md:order-last">
          {props.contents[0].social_media_title?.map((
            title: SocialMediaTitle,
            index: number,
          ) => (
            <h2
              class="text-center text-[#081D54] text-[22px] mb-[20px] leading-none"
              key={index}
            >
              {title.text} <b>{title.text_bold}</b>
            </h2>
          ))}
          <ul class="grid grid-cols-4 grid-flow-row gap-1 mx-auto max-w-[215px]">
            {socialMediaLinks.map((media: SocialMedia, index: number) => (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener"
                  href={media.social_media_link}
                  class="bg-[#00CE7C] flex rounded-[10%] cursor-pointer w-[50px] h-[50px]"
                >
                  <Image
                    class="object-cover w-full w-auto h-[25px] m-auto"
                    src={media.img}
                    alt={media.alt}
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
