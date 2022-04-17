import { useEffect, useRef, useState } from "react";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#0178FF",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
});

export default function IndexPage() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  const url =
    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className="relative w-full">
      <div className="ml-[55px] z-20" id="" ref={waveformRef} />
      <div className="controls absolute top-12 left-0">
        <div onClick={handlePlayPause}>
          {!playing ? (
            <FaPlayCircle className="text-5xl text-[#2d3248] hover:text-yellow-400 items-center pointer " />
          ) : (
            <FaStopCircle className="text-5xl text-[#2d3248] hover:text-yellow-400 items-center pointer " />
          )}
        </div>
      </div>
    </div>
  );
}
