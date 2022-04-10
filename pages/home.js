import Hero from "../components/Hero";
import HomePage from "../containers/HomePage";
import Footer from "../components/Footer";
import MusicPlayer from "../components/MusicPlayer";
export default function Home() {
  return (
    <div>
      <Hero />
      <HomePage />
      <Footer />
      {/* <MusicPlayer /> */}
    </div>
  );
}
