import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";

export type Paragraph = {
  text: string;
};

export interface AccordionItemProps {
  question: string;
  answers: Paragraph[];
  margin_top?: string;
  margin_botton?: string;
}

const validHTMLTags = /<(?:b|a)[^>]*>[^<]*(?:<\/b>|<\/a>)?|^[^<>]*$/i;

export function AccordionItem(props: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  return (
    <div>
      <div class="w-full transition-all duration-500">
        <div
          class="flex justify-between md:items-center items-baseline md:p-[15px] p-[12px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 class="text-[#081D54] text-[16px] font-bold leading-none">
            {props.question}
          </h4>
          <div class="flex items-center justify-center">
            <span>
              <object
                aria-label="accordion menu toggle"
                width="15.99"
                height="15.99"
                class="pointer-events-none"
                data={isOpen
                  ? asset(`/icon-opened.svg`)
                  : asset(`/icon-closed.svg`)}
              >
              </object>
            </span>
          </div>
        </div>
        <div
          ref={contentRef}
          class={`overflow-hidden transition-all duration-500 ${
            isOpen ? "h-full" : "h-0"
          }`}
          style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
        >
          {Array.isArray(props.answers) &&
            props.answers.map((answer, index) => (
              <p
                key={index}
                class={`text-[#081D54] text-[16px] font-normal ${
                  (props.margin_botton &&
                    (props.answers.length === 1 ||
                      index !== props.answers.length - 1)) &&
                  `mb-[${props.margin_botton}]`
                } ${props.margin_top ? `mt-[${props.margin_top}]` : ""}`}
                dangerouslySetInnerHTML={{
                  __html: validHTMLTags.test(answer.text) ? answer.text : "",
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
