import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export interface Props {
  gridColsDesktop?: 1 | 2;
  contents: Contents[];
}

export type Contents = {
  footerColumns?: FooterColumns;
  footerLinksContainer?: FooterLinksContainer[];
  socialMediaStyle?: SocialMediaStyle;
  social_media_title?: SocialMediaTitle[];
  social_media?: SocialMedia[];
};

export type FooterColumns = {
  desktop?: FooterColumnsDesktop;
  mobile?: FooterColumnsMobile;
};

export type FooterColumnsDesktop = {
  orderDesktopFooterLinks?: "order-first" | "order-last";
  orderMobileFooterLinks?: "order-first" | "order-last";
  grid?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "";
  gridRows?: "grid-rows-1" | "grid-rows-2" | "grid-rows-3" | "grid-rows-4" | "grid-rows-5" | "";
};

export type FooterColumnsMobile = {
  orderDesktopSocialMediaTitle?: "order-first" | "order-last";
  orderMobileSocialMediaTitle?: "order-first" | "order-last";
  grid?: "grid-cols-1" | "grid-cols-2" | "grid-cols-3" | "";
  gridRows?: "grid-rows-1" | "grid-rows-2" | "grid-rows-3" | "grid-rows-4" | "grid-rows-5" | "";
};

export type FooterLinksContainer = {
  footerLinks: FooterLinks[];
};

export type FooterLinks = {
  label?: string;
  footer_links_link?: string;
  has_underline?: boolean;
  fontWeight?: "font-normal" | "font-bold";
};

export type SocialMediaStyle = {
  marginLeftDesktop?: string;
  paddingTopDesktop?: string;
  paddingTopMobile?: string;
  paddingBottomDesktop?: string;
  paddingBottomMobile?: string;
  paddingLeftRightDesktop?: string;
  paddingLeftRightMobile?: string;
};

export type SocialMediaTitle = {
  marginBottom?: string;
  text?: string;
  text_bold?: string;
};

export type SocialMedia = {
  img: LiveImage;
  label: string;
  social_media_link?: string;
};

export default function Footer(props: Props) {
  const footerLinksContainers = props.contents[0]?.footerLinksContainer || [];

  const [socialMediaLinks] = useState(
    Array.isArray(props.contents[0]?.social_media)
      ? props.contents[0]?.social_media
      : []
  );

  const marginLeft = props.contents[0]?.socialMediaStyle?.marginLeftDesktop || "0px";
  const paddingTopDesktop = props.contents[0]?.socialMediaStyle?.paddingTopDesktop || "0px";
  const paddingTopMobile = props.contents[0]?.socialMediaStyle?.paddingTopMobile || "0px";
  const paddingBottomDesktop = props.contents[0]?.socialMediaStyle?.paddingBottomDesktop || "0px";
  const paddingBottomMobile = props.contents[0]?.socialMediaStyle?.paddingBottomMobile || "0px";
  const paddingLeftRightDesktop = props.contents[0]?.socialMediaStyle?.paddingLeftRightDesktop || "0px";
  const paddingLeftRightMobile = props.contents[0]?.socialMediaStyle?.paddingLeftRightMobile || "0px";
  const desktopGrid = props.contents[0]?.footerColumns?.desktop?.grid;
  const desktopGridRows = props.contents[0]?.footerColumns?.desktop?.gridRows;
  const mobileGrid = props.contents[0]?.footerColumns?.mobile?.grid;
  const mobileGridRows = props.contents[0]?.footerColumns?.mobile?.gridRows;
  const orderDesktopFooterLinks = props.contents[0]?.footerColumns?.desktop?.orderDesktopFooterLinks;
  const orderMobileFooterLinks = props.contents[0]?.footerColumns?.desktop?.orderMobileFooterLinks;
  const orderDesktopSocialMediaTitle = props.contents[0]?.footerColumns?.mobile?.orderDesktopSocialMediaTitle;
  const orderMobileSocialMediaTitle = props.contents[0]?.footerColumns?.mobile?.orderMobileSocialMediaTitle;
  const marginBottomSocialMediaTitle = props.contents[0]?.social_media_title?.map((title: SocialMediaTitle) => title.marginBottom);

  return (
    <footer class="bottom-0 relative">
      <div
        class={`grid grid-cols-1 md:grid-cols-${
          props.gridColsDesktop || "2"
        } md:(justify-between items-center) container mx-auto`}
      >
        <div
          class={`grid ${orderMobileFooterLinks} md:(${orderDesktopFooterLinks}) md:(${desktopGrid} ) ${mobileGrid}`}
        >
          {footerLinksContainers.map((container, containerIndex) => (
          <div
            class={`p-[10px] ${orderMobileFooterLinks} md:(${orderDesktopFooterLinks})`}
            key={containerIndex}
          >
            <ul
             class={`md:(${desktopGridRows}) mt-[35px] grid ${mobileGridRows}`}
            >
              {container.footerLinks.map((links: FooterLinks, index: number) => (
                <li
                  key={index}
                  class={`text-[#081D54] ${links.fontWeight || "font-normal"} mb-[14.400px]`}
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    href={links.footer_links_link}
                    class={links.has_underline ? "underline" : "no-underline"}
                  >
                    {links.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        <div
          class={`md:(ml-[${marginLeft}] pt-[${paddingTopDesktop}] pb-[${paddingBottomDesktop}] px-[${paddingLeftRightDesktop}]) px-[${paddingLeftRightMobile}] pb-[${paddingBottomMobile}] pt-[${paddingTopMobile}] ${orderDesktopSocialMediaTitle} md:(${orderMobileSocialMediaTitle})`}
        >
          {props.contents[0]?.social_media_title?.map((title: SocialMediaTitle, index: number) => (
            <h2
              class={`text-center text-[#081D54] text-[22px] mb-[${marginBottomSocialMediaTitle}] leading-none`}
              key={index}
            >
              {title.text} <b>{title.text_bold}</b>
            </h2>
          ))}
          <ul class={`grid grid-cols-4 grid-flow-row gap-1 mx-auto max-w-[215px] pt-[1%]`}>
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
                    alt={media.label}
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