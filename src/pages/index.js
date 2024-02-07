import Image from "next/image";
import { Lato } from "next/font/google";
import Header from "./components/header";
import SectionHero from "./components/sectionHero";
import SectionContent from "./components/sectionContent";

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function Home() {
  return (
    <div>
      <Header />
      <SectionHero />
      <SectionContent/>
    </div>
  );
}
