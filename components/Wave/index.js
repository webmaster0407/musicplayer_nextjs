// import Script from "next/script";

// const Wave = ({ url }) => {
//   <Script src="https://unpkg.com/wavesurfer.js" />;

//   var audioTrack = WaveSurfer.create({
//     container: ".audio",
//     waveColor: "#eee",
//     progressColor: "red",
//     barWidth: 2,
//   });

//   audioTrack.load(
//     "https://admin.dequency.io/assets/6e23a139-7751-4c98-8370-08ddc71db2c7.mp3"
//   );

//   playBtn.addEventListener("click", () => {
//     audioTrack.playPause();

//     if (audioTrack.isPlaying()) {
//       playBtn.classList.add("playing");
//     } else {
//       playBtn.classList.remove("playing");
//     }
//   });

//   stopBtn.addEventListener("click", () => {
//     audioTrack.stop();
//     playBtn.classList.remove("playing");
//   });

//   volumeSlider.addEventListener("mouseup", () => {
//     changeVolume(volumeSlider.value);
//   });

//   const changeVolume = (volume) => {
//     if (volume == 0) {
//       muteBtn.classList.add("muted");
//     } else {
//       muteBtn.classList.remove("muted");
//     }

//     audioTrack.setVolume(volume);
//   };

//   muteBtn.addEventListener("click", () => {
//     if (muteBtn.classList.contains("muted")) {
//       muteBtn.classList.remove("muted");
//       audioTrack.setVolume(0.5);
//       volumeSlider.value = 0.5;
//     } else {
//       audioTrack.setVolume(0);
//       muteBtn.classList.add("muted");
//       volumeSlider.value = 0;
//     }
//   });

//   return (
//     <div className="audio-container">
//       <div className="audio"></div>
//     </div>
//   );
// };

// export default Wave;
