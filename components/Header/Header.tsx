import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import ButtonHamburger from "deco-sites/start/components/Header/ButtonHamburger/ButtonHamburger.tsx";
import { useEffect, useRef, useState } from "preact/hooks";

export interface Props {
  logo: LiveImage;
  alternativeText: string;
  linkLogo?: string;
  dropdownMenus?: DropdownMenu[];
  link: Links[];
  LinkWithBackground: LinksWithBackground[];
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
  label: string;
  link: string;
};

export type LinksWithBackground = {
  label: string;
  link: string;
};

export default function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(false);
  const [firstMenuItemRendered, setFirstMenuItemRendered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => {
    const storedIsMobile = localStorage.getItem("isMobile");
    return storedIsMobile ? JSON.parse(storedIsMobile) : false;
  });
  const [contentHeight, setContentHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      if (globalThis.innerWidth > 1024) {
        setIsMenuOpen(false);
        setClickedMenu(false);
        setIsMobile(false);
        localStorage.setItem("isMobile", JSON.stringify(false));
      } else {
        setIsMobile(true);
        localStorage.setItem("isMobile", JSON.stringify(true));
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    addEventListener("resize", handleResize);
    addEventListener("resize", handleWindowResize);

    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
      removeEventListener("resize", handleWindowResize);
    };
  }, [isMobile]);

  return (
    <header
      class="flex py-[10px] md:(px-[20px] py-[30px]) lg:(pr-[20px] pl-[20px] py-[10px]) pl-[5px] pr-[15px]  border-b border-solid border-[#d6d6d6] h-auto w-full flex items-center z-20 relative fixed top-0 bg-white"
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
            <div class="flex lg:(relative h-auto flex-row) flex-col absolute w-full h-[100%] left-0">
              <ul
                class={`lg:flex lg:h-[45.99px] ${
                  isMenuOpen
                    ? "block flex flex-col md:bg-white bg-[#00CE7C] top-[100%] relative w-[100%] right-0 z-10 "
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
                      href={menu.hasLink ? menu.link : "/"}
                      class="text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] md:hover:(text-[#00CE7C] bg-transparent) hover:(text-[#081D54] bg-[#55595c]) font-normal transition duration-300 w-full"
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
                            filter: isHovered
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
                            : "md:max-h-full 0px",
                        }}
                      >
                        {menu.links?.map((link) => (
                          <li class="md:bg-white">
                            <a
                              href={link.link}
                              class="block py-[13px] px-[20px] mobile:text-[13px] text-[11.05px] text-[#081D54] lg:hover:(text-[#00CE7C] bg-transparent) hover:(text-[#081D54] bg-[#55595c]) transition duration-300 whitespace-nowrap w-full border border-transparent border-l-[8px]"
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
              <ul
                class={`lg:flex lg:h-[45.99px]  ${
                  isMenuOpen
                    ? "block flex flex-col md:bg-white bg-[#00CE7C] top-[100%] relative w-[100%] right-0"
                    : "hidden lg:flex lg:flex-row lg:items-center lg:justify-end pl-[10px]"
                }`}
              >
                {props.link.map((link) => (
                  <li>
                    <a
                      href={link.link}
                      class="text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] cursor-pointer font-normal inline-block lg:hover:(text-[#00CE7C] bg-transparent) hover:(text-[#081D54] bg-[#55595c]) w-full transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul class="hidden md:block md:mr-[123.9px] lg:mr-0">
              {props.LinkWithBackground.map((link) => (
                <li class=" md:px-[10px] leading-[15px] lg:(min-w-[310.83px]) lg:ml-[10px]">
                  <a
                    href={link.link}
                    class="bg-[#00CE7C] font-medium text-white rounded-full text-[15px] min-w-[218.93px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block"
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

// import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
// import Image from "deco-sites/std/components/Image.tsx";
// import ButtonHamburger from "deco-sites/start/components/Header/ButtonHamburger/ButtonHamburger.tsx";
// import { useEffect, useState } from "preact/hooks";

// export interface Props {
//   logo: LiveImage;
//   link_logo?: string;
//   link: Links[];
//   link_with_background: LinksWithBackground[];
// }

// export type Links = {
//   link: string;
//   title: string;
// };

// export type LinksWithBackground = {
//   link: string;
//   title: string;
// };

// export default function Header(props: Props) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (globalThis.innerWidth > 1024) {
//         setIsMenuOpen(false);
//       }
//     };
//     addEventListener("resize", handleResize);
//     return () => {
//       removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <header class="flex py-[10px] md:(px-[20px] py-[30px]) lg:(pr-[20px] pl-[20px] py-[10px]) pl-[5px] pr-[15px]  border-b border-solid border-[#d6d6d6] h-auto w-full flex items-center z-20 relative fixed top-0 bg-white">
//       <div class="flex items-center container mx-auto w-full">
//         <nav class="flex items-center justify-between md:(flex items-center justify-content-unset) lg:(flex items-center justify-between) w-full">
//           <a href={props.link_logo} class=" px-[10px] md:w-[19%] w-[50%]">
//             <Image
//               src={props.logo}
//               alt="logo"
//               width={500}
//               height={128}
//               class="pr-[10%] sm:pr-[12%] md:pr-0 max-w-none w-[100%] object-cover h-auto md:(min-w-[73%] max-w-[185px]) lg:min-w-[185px]"
//             />
//           </a>
//           <div class="relative contents">
//             <div class="md:(w-[33.19%] flex justify-end pr-[10px])">
//               <ButtonHamburger isMenuOpen={isMenuOpen} onClick={handleClick} />
//             </div>
//             <ul
//               class={`lg:flex lg:h-[45.99px]  ${
//                 isMenuOpen
//                   ? "block flex flex-col bg-[#00CE7C] mt-[218px] absolute w-[100%] right-0"
//                   : "hidden lg:flex lg:flex-row lg:items-center lg:justify-end pl-[10px]"
//               }`}
//             >
//               {props.link.map((link) => (
//                 <li>
//                   <a
//                     href={link.link}
//                     class="text-[17px] whitespace-nowrap leading-[20px] lg:px-[15px] px-[20px] lg:py-[13px] py-[10px] text-[#081D54] cursor-pointer font-normal inline-block hover:text-[#00CE7C] transition duration-300"
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <ul class="hidden md:block md:mr-[123.9px] lg:mr-0">
//               {props.link_with_background.map((link) => (
//                 <li class=" md:px-[10px] leading-[15px] lg:(min-w-[310.83px]) lg:ml-[10px]">
//                   <a
//                     href={link.link}
//                     class="bg-[#00CE7C] font-medium text-white rounded-full text-[15px] min-w-[218.93px] min-h-[38.98px] break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block"
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }
