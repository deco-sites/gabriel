import CompanyIntroduction from "deco-sites/start/components/Main/CompanyIntroduction.tsx";
import Carousel from "deco-sites/start/components/Main/Carousel.tsx";
import FirstSteps from "deco-sites/start/components/Main/FirstSteps.tsx";

export default function Main() {
  return (
    <main class="top-0 left-0 z-0 flex-center-between flex-col w-full">
      <CompanyIntroduction img="" heading_text="" text_bold="" link={[]} />
      <Carousel slider={[]} alt="" />
      <FirstSteps title="" paragraph="" img="" alt="" cards={[]} />
    </main>
  );
}
