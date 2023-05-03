import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import ButtonHamburger from "deco-sites/start/components/Header/ButtonHamburger.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  logo: LiveImage;
  link_logo?: string;
  link: Links[];
  link_with_background: LinksWithBackground[];
}

export type Links = {
  link: string;
  title: string;
};

export type LinksWithBackground = {
  link: string;
  title: string;
};

export default function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (globalThis.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header class="flex py-[10px] md:(px-[20px] py-[30px]) lg:(pr-[20px] pl-[20px] py-[10px]) pl-[5px] pr-[15px]  border-b border-solid border-[#d6d6d6] h-auto">
      <div class="flex items-center container mx-auto w-full">
        <nav class="flex items-center justify-between md:(flex items-center justify-content-unset) lg:(flex items-center justify-between) w-full">
          <a href={props.link_logo} class=" px-[10px] md:w-[19%] w-[50%]">
            <Image
              src={props.logo}
              alt="logo"
              width={500}
              height={128}
              class="pr-[10%] sm:pr-[12%] md:pr-0 max-w-none w-[100%] object-cover h-auto md:(min-w-[73%] max-w-[185px]) lg:min-w-[185px]"
            />
          </a>
          <div class="relative contents">
            <div class="md:(w-[33.19%] flex justify-end pr-[10px])">
              <ButtonHamburger isMenuOpen={isMenuOpen} onClick={handleClick} />
            </div>
            <ul
              class={`lg:flex lg:h-[45.99px]  ${
                isMenuOpen
                  ? "block flex flex-col bg-[#00CE7C] mt-[218px] absolute w-[100%] right-0"
                  : "hidden lg:flex lg:flex-row lg:items-center lg:justify-end pl-[10px]"
              }`}
            >
              {props.link.map((link) => (
                <li>
                  <a
                    href={link.link}
                    class="text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] cursor-pointer font-normal inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="hidden md:block md:mr-[123.9px] lg:mr-0">
              {props.link_with_background.map((link) => (
                <li class=" md:px-[10px] leading-[15px] lg:(min-w-[310.83px]) lg:ml-[10px]">
                  <a
                    href={link.link}
                    class="bg-[#00CE7C] font-medium text-white rounded-full text-[15px] min-w-[218.93px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
