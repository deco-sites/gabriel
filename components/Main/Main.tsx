import CompanyIntroduction from "deco-sites/start/components/Main/CompanyIntroduction.tsx";
import Carousel from "deco-sites/start/components/Main/Carousel.tsx";
import FirstSteps from "deco-sites/start/components/Main/FirstSteps.tsx";
import Cards from "deco-sites/start/components/Main/Cards.tsx";
import AboutSecurity from "deco-sites/start/components/Main/AboutSecurity.tsx";
import PostBlog from "deco-sites/start/components/Main/PostBlog.tsx";
import FAQ from "deco-sites/start/components/Main/FAQ.tsx";
import GetToKnowGabriel from "deco-sites/start/components/Main/GetToKnowGabriel.tsx";
import Testimonials from "deco-sites/start/components/Main/Testimonials.tsx";

export default function Main() {
  return (
    <main class="top-0 left-0 z-0 flex-center-between flex-col w-full">
      <CompanyIntroduction img="" heading_text="" text_bold="" link={[]} />
      <Carousel slider={[]} alt="" />
      <FirstSteps
        title=""
        paragraph=""
        img=""
        alt=""
        name_product=""
        about_product=""
      />
      <Cards cards={[]} />
      <AboutSecurity title="" paragraph="" img="" alt="" cards={[]} />
      <PostBlog title="" cards={[]} button_title="" />
      <FAQ title="" faqs={[]} />
      <GetToKnowGabriel
        title=""
        text=""
        img=""
        alt=""
        link=""
        button_title=""
      />
      <Testimonials title="" testimonial={[]} />
    </main>
  );
}
