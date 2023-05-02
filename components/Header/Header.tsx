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
      if (globalThis.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header class="py-[10px] px-[20px] border-b border-solid border-[#d6d6d6]">
      <div class="flex items-center container mx-auto">
        <nav class="flex-center-between w-full flex-end">
          <a href={props.link_logo} class=" px-[10px] flex">
            <Image
              src={props.logo}
              alt="logo"
              width={500}
              height={128}
              class="max-w-none w-[117px] h-[30px]  md:(w-[185px] h-[47px])"
            />
          </a>
          <div class="w-full relative contents">
            <ButtonHamburger
              isMenuOpen={isMenuOpen}
              onClick={handleClick}
            />
            <ul
              class={`lg:flex ${
                isMenuOpen
                  ? "block flex flex-col bg-[#00CE7C] mt-[150px] absolute w-[100%] right-0"
                  : "hidden md:flex md:flex-row md:items-center md:justify-end pl-[10px]"
              }`}
            >
              {props.link.map((link) => (
                <li>
                  <a
                    href={link.link}
                    class="text-[17px] px-[15px] py-[13px] text-[#081D54] cursor-pointer font-normal"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              {props.link_with_background.map((link) => (
                <li class="hidden md:block md:px-[10px]">
                  <a
                    href={link.link}
                    class="bg-[#00CE7C] font-medium text-white rounded-full text-[15px] py-[12px] px-[24px] cursor-pointer font-bold"
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
