import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";

export type PostCard = {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  alt: string;
  badge: string;
  link: string;
  post_title: string;
  excerpt: string;
};

export interface Props {
  title: string;
  cards: PostCard[];
  button_title: string;
}

export default function PostBlog(props: Props) {
  const [postsList, setPostsList] = useState<Array<PostCard>>(
    Array.isArray(props.cards) ? props.cards : [],
  );
  const [visiblePosts, setVisiblePosts] = useState<number>(3);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisiblePosts(visiblePosts + 3);
      if (visiblePosts + 3 >= postsList.length) {
        setShowButton(false);
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayContent(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const shuffledPosts = postsList.sort(() => Math.random() - 0.5);
    setPostsList(shuffledPosts);
  }, [props.cards]);

  const handleMouseEnter = (
    index: number | ((prevState: number) => number),
  ) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section class="bg-[#1C47BA] pb-[20px]">
      <div class="p-[10px] container mx-auto">
        <div class="pb-[6%] flex flex-col">
          <h2 class="text-white text-center text-[26px] font-bold mt-[5%] leading-none mb-[20px]">
            {props.title}
          </h2>
          {displayContent
            ? (
              <>
                {postsList.filter((props) => props).length > 0 && (
                  <div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-y-0 gap-x-[25px] gap-y-[42px] mobile:m-0 m-[5%]">
                      {postsList.slice(0, visiblePosts).map((props, index) => (
                        <article
                          key={props}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                          className="grid shadow-post-blog flex flex-col justify-between rounded-[5px] bg-white relative"
                          style={{ height: "fit-content" }}
                        >
                          <span class="bg-[#61CE70] text-white text-[11px] font-bold rounded-[5px] m-[9px] py-[0.6em] px-[1.2em] absolute z-10 cursor-default">
                            {props.badge}
                          </span>
                          <a href={props.link} class="mb-[20px] relative">
                            <Picture>
                              <Source
                                media="(max-width: 301.47px )"
                                src={props.srcMobile}
                                width={301.47}
                              />
                              <Source
                                media="(min-width: 261.25px)"
                                src={props.srcDesktop
                                  ? props.srcDesktop
                                  : props.srcMobile}
                                width={261.25}
                              />
                              <img
                                class="object-cover w-full h-full rounded-t-[5px] rounded-b-0"
                                sizes="(max-width: 640px) 100vw, 30vw"
                                src={props.srcMobile}
                                alt={props.alt}
                                decoding="async"
                                loading="lazy"
                                style={{ maxWidth: "fit-content" }}
                              />
                            </Picture>
                            <span
                              className={`post-gradient absolute top-0 left-0 w-full h-full ${
                                hoveredIndex === index ? "opacity-50" : ""
                              }`}
                              style={{
                                zIndex: 1,
                                transition: "opacity 0.2s ease-in-out",
                              }}
                            >
                            </span>
                          </a>
                          <div class="px-[10px]">
                            <a href={props.link}>
                              <h3 class="text-[#081D54] text-[16px] font-bold leading-none mb-[25px] text-center">
                                {props.post_title}
                              </h3>
                            </a>
                            <p class="text-[#777] font-normal text-[16px] leading-none text-center mb-[20px]">
                              {props.excerpt}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>

                    {showButton && postsList.length > visiblePosts && (
                      <button
                        class="bg-[#00CE7C] font-medium text-white rounded-full md:text-[15px] w-max break-words h-auto text-center py-[12px] px-[24px] cursor-pointer font-semibold inline-block leading-[15px] flex items-center justify-center mx-auto min-w-[252px] focus:outline-none mt-[30px]"
                        onClick={handleShowMore}
                      >
                        {loading
                          ? (
                            <object
                              data={asset(`/spinner-solid.svg`)}
                              class="animate-spin"
                              width="20"
                              height="20"
                              aria-label="icon loading"
                            >
                            </object>
                          )
                          : (
                            props.button_title
                          )}
                      </button>
                    )}
                  </div>
                )}
              </>
            )
            : null}
        </div>
      </div>
    </section>
  );
}
