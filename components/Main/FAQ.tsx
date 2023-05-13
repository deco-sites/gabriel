import {
  AccordionItem,
  AccordionItemProps,
} from "deco-sites/start/components/Main/AccordionItem/AccordionItem.tsx";

export interface Props {
  title: string;
  faqs: AccordionItemProps[];
}

export default function FaqSection(props: Props) {
  const { faqs } = props;
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section class="w-full mt-[5%] md:p-0 px-[4%]">
      <div class="mx-auto container p-[10px]">
        <h2 class="text-center text-[#081D54] md:text-[24px] text-[22px] font-bold mb-[20px]">
          {props.title}
        </h2>
        <div class={`grid md:grid-cols-2 grid-cols-1`}>
          <div class="p-[10px]">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                {...faq}
              />
            ))}
          </div>
          <div class="p-[10px]">
            {rightFaqs.map((faq, index) => (
              <AccordionItem key={index + half} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
