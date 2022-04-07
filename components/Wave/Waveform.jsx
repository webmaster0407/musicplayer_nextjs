import React from "react";
import classes from "./Waveform.module.css";
import "./1.mp3";
const { data } = await getWaveformFile("1.mp3");
// data = [0, 0, 2, -2, 5, -7, 20, -21, 55, -56, 110, -100, 20]
const peaks = data.filter((point) => point >= 0);
// peaks = [0, 0, 2, 5, 20, 55, 110, 20]
const ratio = Math.max(...peaks) / 100;
// ratio = 1.1
const normalized = peaks.map((point) => Math.round(point / ratio));
// normalized = [0, 0, 2, 5, 18, 50, 100, 18]

const Waveform = ({ waveformData }) => {
  return (
    <div className={classes.waveformContainer}>
      {waveformData.map((p, i) => (
        <div
          key={`${p}-${i}`}
          className={classes.wavePoint}
          style={{ height: `${p}%` }}
        />
      ))}
    </div>
  );
};

export default Waveform;
