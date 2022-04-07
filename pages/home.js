import Hero from "../components/Hero";
import HomePage from "../containers/HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <HomePage />
        <Footer />
        {/* <Waveform waveformData="1.mp3" /> */}
      </div>
    </div>
  );
}
