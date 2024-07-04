import Hero from "./component/Hero/Hero";
import Faq from "./component/Faq/Faq";
import FifthSection from "./component/FifthSection/FifthSection";
import Footer from "./component/Footer/Footer";
import ForthSection from "./component/FourthSection/ForthSection";
import HeroBanner from "./component/HeroBanner/HeroBanner";
import SeventhSection from "./component/SeventhSection/SeventhSection";
import Thirdsection from "./component/Thirdsection/Thirdsection";

export default function App() {
  return (
    <>
      <Hero />
      <HeroBanner />
      <Thirdsection />
      <ForthSection />
      <FifthSection />
      <SeventhSection />
      <Faq />
      <Footer />
    </>
  )
}