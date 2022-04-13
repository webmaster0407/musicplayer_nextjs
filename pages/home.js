import Hero from "../components/Hero";
import HomePage from "../containers/HomePage";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";
import PaginatedItems from "../components/Pagenation";
import { musicData } from "../dummyData";
export default function Home() {
  const items = [...Array(33).keys()];

  return (
    <div>
      <Hero />
      <HomePage />
      <Footer />
      {/* <PaginatedItems itemsPerPage={4} items={musicData} /> */}
    </div>
  );
}
