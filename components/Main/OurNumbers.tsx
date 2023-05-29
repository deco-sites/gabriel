export type Data = {
  numbers: string;
  label: string;
};

export interface Props {
  label: string;
  maxWidthLabel?: number;
  firstData: Data;
  secondData: Data;
  thirdData: Data;
  fourthData: Data;
  count: string;
  description: string;
}

export default function OurNumbers(props: Props) {
  const {
    label,
    firstData,
    secondData,
    thirdData,
    fourthData,
    count,
    description,
  } = props;

  return (
    <section class="container mx-auto flex flex-col mt-[60px]">
      <div class="p-[10px] w-full md:mt-0 mt-[10px]">
        <h4
          class={`leading-[30px] text-[#081D54] text-[24px] font-normal max-w-[${props.maxWidthLabel}px] md:(ml-0 mr-0) ml-[40px] mr-[9px]`}
        >
          {label}
        </h4>
      </div>
      <div class=" mt-[10px] w-full flex md:flex-row flex-col items-center">
        <div class="md:w-[33.333%] w-[100%] flex flex-col md:(pl-0 pr-0) pl-[40px] pr-[20px]">
          <div class=" ml-[10px]">
            <div class="pt-[10px] pr-[10px]">
              <p class="text-[#26D07C] font-bold text-[32px] leading-none">
                {firstData?.numbers}
              </p>
              <p class="text-[#081D54] font-normal text-[16px] md:mr-[180px] md:mb-[14.400px] mb-[4.400px]">
                {firstData?.label}
              </p>
            </div>
            <div class="py-[15px]">
              <span class="md:(border-b border-solid border-[#000] flex my-[20px] mr-[10px])">
              </span>
            </div>
          </div>
          <div>
            <div class="pb-[10px] ml-[10px]">
              <p class="text-[#26D07C] font-bold text-[32px] leading-none pr-[10px]">
                {thirdData?.numbers}
              </p>
              <p class="text-[#081D54] font-normal text-[16px] md:(mr-[150px] mb-0) mb-[14.400px]">
                {thirdData?.label}
              </p>
            </div>
          </div>
        </div>
        <div class="md:w-[33.333%] w-[100%] flex flex-col md:(pl-0 pr-0) pl-[40px] pr-[20px]">
          <div class="md:ml-[-20px]">
            <div class="pt-[10px] px-[10px]">
              <p class="text-[#26D07C] font-bold text-[32px] leading-none">
                {secondData?.numbers}
              </p>
              <p class="text-[#081D54] font-normal text-[16px] md:mr-[150px] md:mb-[14.400px] mb-[4.400px]">
                {secondData?.label}
              </p>
            </div>
            <div class="py-[15px]">
              <span class="md:(border-b border-solid border-[#000] flex mr-[30px] my-[20px] ml-[10px])">
              </span>
            </div>
          </div>
          <div class="md:ml-[-20px]">
            <div class="pb-[10px] px-[10px]">
              <p class="text-[#26D07C] font-bold text-[32px] leading-none">
                {fourthData?.numbers}
              </p>
              <p class="text-[#081D54] font-normal text-[16px] md:(mr-[220px] mb-0) mb-[4.400px]">
                {fourthData?.label}
              </p>
            </div>
          </div>
        </div>
        <div class=" my-auto md:w-[33.333%] w-[100%] flex flex-col relative top-[9px]">
          <div class=" border-[3px] border-solid border-[#081D54] md:min-h-[209.59px] min-h-[140.91px] md:(mr-[100px] ml-[-30px] mb-0) mx-[20px] p-[10px] mb-[40px] flex items-center justify-center flex-col rounded-[30px]">
            <p class="text-[#26D07C] font-bold text-[32px] leading-none mt-[44px]">
              {count}
            </p>
            <div class="md:mb-[34px] mb-[14.400px]">
              <p class="text-[#081D54] font-normal text-[16px] text-center mx-[55px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
