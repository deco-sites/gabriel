type ButtonHamburgerProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export default function ButtonHamburger(props: ButtonHamburgerProps) {
  const { isMenuOpen, onClick } = props;

  return (
    <button
      class="flex flex-col justify-around w-[22px] h-[22px] border-0 focus:outline-none focus:border-none cursor-pointer md:hidden"
      onClick={onClick}
      aria-label="menu button"
    >
      <span
        class={`block w-full h-[0.19rem] rounded bg-[#081D54] transition-transform duration-300 mt-[2px] ${
          isMenuOpen ? "rotate-45 translate-y-1.5 mt-[3px]" : ""
        }`}
      >
      </span>
      <span
        class={`block w-full h-[0.19rem] rounded bg-[#081D54] transition-transform duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      >
      </span>
      <span
        class={`block w-full h-[0.19rem] rounded bg-[#081D54] transition-transform duration-300 mb-[2px] ${
          isMenuOpen ? "-translate-y-1.5 -rotate-45 mb-[1px]" : ""
        }`}
      >
      </span>
    </button>
  );
}
