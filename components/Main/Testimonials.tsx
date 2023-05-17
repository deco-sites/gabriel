import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";

export type Card = {
  img: LiveImage;
  alt: string;
};

export interface Props {
  title: string;
  testimonial: Card[];
}

export default function Testimonials(props: Props) {
  const [testimonialList] = useState<Array<Card>>(
    Array.isArray(props.testimonial) ? props.testimonial : [],
  );

  const validHTMLTags = /^(\w+|\s|<b>[\s\S]*<\/b>)*$/;

  const titleHTML = validHTMLTags.test(props.title) ? props.title : "";

  return (
    <section class="container mx-auto">
      {testimonialList.filter((testimonial) => testimonial.alt).length > 0 && (
        <>
          <h4
            class="mb-[20px] p-[10px] md:(mr-0 ml-0) mr-[20px] ml-[40px] md:pb-0 leading-[30px] text-[24px] text-[#081D54]"
            dangerouslySetInnerHTML={{ __html: titleHTML }}
          >
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2">
            {testimonialList.map((props) => (
              <article class="flex justify-center p-[10px] md:pt-0">
                <Image
                  src={props.img}
                  class="object-cover h-auto md:w-[50%] w-[85%]"
                  alt={props.alt}
                  width={592}
                  height={681}
                  style={{ height: "fit-content" }}
                />
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
