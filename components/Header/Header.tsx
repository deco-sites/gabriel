import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import ButtonHamburger from "deco-sites/start/components/Header/ButtonHamburger/ButtonHamburger.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

export interface Props {
  logo: LiveImage;
  alternativeText: string;
  linkLogo?: string;
  dropdownMenus?: DropdownMenu[];
  link?: Links[];
  LinkWithBackground?: LinksWithBackground[];
}

export type DropdownMenu = {
  iconMenu: LiveImage;
  alternativeTextIcon?: string;
  label?: string;
  link?: string;
  hasLink?: boolean;
  links?: DropdownMenuLinks[];
};

export type DropdownMenuLinks = {
  label?: string;
  link?: string;
};

export type Links = {
  label?: string;
  link?: string;
};

export type LinksWithBackground = {
  label?: string;
  link?: string;
};

export default function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(false);
  const [firstMenuItemRendered, setFirstMenuItemRendered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (clickedMenu && headerRef.current) {
      setContentHeight(headerRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [clickedMenu]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        headerRef.current && !headerRef.current.contains(event.target as Node)
      ) {
        setClickedMenu(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [headerRef]);

  const handleDotClick = (event: MouseEvent) => {
    event.stopPropagation();
    setClickedMenu(!clickedMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
        setClickedMenu(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 1024;
      setIsMobile(mobile);
      setWindowWidth(windowWidth);
      setIsMenuOpen(mobile ? false : isMenuOpen);
      setClickedMenu(mobile ? false : clickedMenu);
    };

    addEventListener("resize", handleWindowResize);

    handleResize();

    return () => {
      removeEventListener("resize", handleWindowResize);
    };
  }, [isMobile]);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);
  
  return (
    <header
      class="flex py-[10px] md:(px-[20px] py-[30px]) lg:(pr-[20px] pl-[20px] py-[10px]) pl-[5px] pr-[15px] border-b border-solid border-[#d6d6d6] h-auto w-full flex items-center z-20 relative fixed top-0 bg-white"
      ref={headerRef}
    >
      <div class="flex items-center container mx-auto w-full">
        <nav class="flex items-center justify-between md:(flex items-center justify-content-unset) lg:(flex items-center justify-between) w-full">
          <a href={props.linkLogo} class=" px-[10px] md:w-[19%] w-[50%]">
            <Image
              src={props.logo}
              alt={props.alternativeText}
              width={500}
              height={128}
              class="pr-[10%] sm:pr-[12%] md:pr-0 max-w-none w-[100%] object-cover h-auto md:(min-w-[73%]) lg:min-w-[185px]"
            />
          </a>
          <div class="relative contents">
            <div class="md:(w-[33.19%] flex justify-end pr-[10px]) z-10">
              <ButtonHamburger
                isMenuOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
            <div
              class="flex lg:(relative h-auto flex-row) flex-col absolute w-full h-[100%] left-0"
              style={{
                animation: isMenuOpen && isMobile ? "0.3s backwards" : isMobile ? "0.3s backwards" : "",
                transform: isMenuOpen && isMobile ? "scaleY(1)" : isMobile ? "scaleY(0)" : "",
                transition: isMenuOpen && isMobile ? "max-height 0.3s, transform 0.3s" : "",
                transformOrigin: isMenuOpen && isMobile ? "top 105%" : "",
                overflowY: isMenuOpen && isMobile ? "visible transition duration-300" : "",
                animationDirection: isMenuOpen && isMobile ? "normal" : isMobile ?  "reverse": ""              
              }}                      
            >
              {props.dropdownMenus && props.dropdownMenus.length > 0 && (
                <ul
                  class={`lg:flex lg:h-[45.99px] ${
                    (isMenuOpen || windowWidth > 1024)
                      ? "block flex flex-col md:bg-white bg-[#00CE7C] top-[105%] relative w-[100%] right-0 z-10 "
                      : "hidden lg:flex lg:flex-row lg:items-center lg:justify-end pl-[10px] z-0 "
                  }`}
                >
                  {props.dropdownMenus?.map((menu, index) => (
                    <li
                      key={index}
                      class="relative"
                      onClick={handleDotClick}
                      onMouseEnter={!isMobile
                        ? () => setClickedMenu(true)
                        : undefined}
                      onMouseLeave={!isMobile
                        ? () => setClickedMenu(false)
                        : undefined}
                    >
                      <a
                        href={menu.hasLink ? menu.link || "" : undefined}
                        class={`text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] md:hover:(text-[#00CE7C] bg-transparent) hover:(text-[#081D54] bg-[#55595c]) font-normal transition duration-300 w-full  ${
                          clickedMenu
                            ? "md:(text-[#00CE7C] bg-transparent) text-[#081D54] bg-[#55595c]"
                            : ""
                        }`}
                        style={{ display: "-webkit-inline-box" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {menu.label}
                        <span
                          class={`point-events-none py-[10px] pl-[10px] mt-[-10px] mb-[-10px] ${
                            isMobile && window.innerWidth < 768
                              ? "hidden"
                              : "block"
                          }`}
                        >
                          <Image
                            src={menu.iconMenu}
                            alt={menu.alternativeTextIcon}
                            width={10.62}
                            height={17}
                            class="w-[10.62px] h-[17px]"
                            style={{
                              filter: isHovered || clickedMenu
                                ? "invert(49%) sepia(95%) saturate(666%) hue-rotate(114deg) brightness(97%) contrast(101%)"
                                : "none",
                            }}
                          />
                        </span>
                      </a>
                      {(
                        clickedMenu
                      ) &&
                        firstMenuItemRendered && (
                        <ul
                          class={`lg:(absolute bg-white overflow-visible h-full max-h-none) overflow-hidden transition-all duration-500 ${
                            clickedMenu && isMobile ? "h-full" : "h-0"
                          } `}
                          style={{
                            maxHeight: clickedMenu && isMobile
                              ? `${contentHeight}px`
                              : "md:max-h-full 0",
                          }}
                        >
                          {menu.links?.map((link) => (
                            <li class="md:bg-white">
                              <a
                                href={link.link}
                                class="block py-[13px] px-[20px] mobile:text-[13px] text-[11.05px] text-[#081D54] md:hover:(text-[#00CE7C] bg-transparent) hover:(text-[#081D54] bg-[#55595c]) whitespace-nowrap w-full border border-transparent border-l-[8px]"
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {index === 0 && setFirstMenuItemRendered(true)}
                    </li>
                  ))}
                </ul>
              )}
              <ul
                class={`lg:flex lg:h-[45.99px] relative z-10  ${
                  isMenuOpen
                    ? "block flex flex-col md:bg-white bg-[#00CE7C] top-[100%] relative w-[100%] right-0"
                    : "hidden lg:flex lg:flex-row lg:items-center lg:justify-end pl-[10px]"
                }`}
              >
                {props.link?.map((link) => (
                  <li>
                    <a
                      href={link.link}
                      class="text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] cursor-pointer font-normal inline-block md:hover:(text-[#00CE7C] bg-transparent transition-all duration-500) hover:(text-[#081D54] bg-[#55595c]) w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul class="hidden md:block md:mr-[123.9px] lg:mr-0">
              {props.LinkWithBackground?.map((link) => (
                <li class=" md:px-[10px] leading-[15px] lg:(min-w-[310.83px]) lg:ml-[10px]">
                  <a
                    href={link.link}
                    class="bg-[#00CE7C] font-medium text-white rounded-full text-[15px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block"
                  >
                    {link.label}
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
