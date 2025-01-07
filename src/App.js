import { useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  function pause() {
    clearInterval(timer);
    setTimer(null);
  }
  function play() {
    let x = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 100);
    setTimer(x);
  }
  function reset() {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  }

  const hours = Math.round(time / 36000, 2);
  const minutes = Math.floor(time / 600) % 60;
  const seconds = Math.floor(time / 10) % 60;
  const centiseconds = time % 10;
  return (
    <div className="App">
      <h1 className="heading">STOPWATCH</h1>
      <div className="stopwatch">
        <span className="time_div">{hours < 10 ? `0${hours}` : hours}</span>
        <span className="time_colon">:</span>
        <span className="time_div">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <span className="time_colon">:</span>
        <span className="time_div">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
        <span className="time_colon">:</span>
        <span className="time_div">{`0${centiseconds}`}</span>
      </div>

      <div className="button_container">
        <button className="button" onClick={play} disabled={timer}>
          Play
        </button>
        <button className="button" onClick={pause} disabled={!timer}>
          Pause
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
