import SeventhSection from "./component/SeventhSection/SeventhSection";
import FifthSection from "./component/FifthSection/FifthSection";
import ForthSection from "./component/FourthSection/ForthSection";
import Thirdsection from "./component/Thirdsection/Thirdsection";
import HeroBanner from "./component/HeroBanner/HeroBanner";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Faq from "./component/Faq/Faq";


export default function App() {
  return (
    <>
      <NavBar />
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