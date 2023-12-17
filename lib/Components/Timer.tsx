import { useEffect, useMemo, useState } from "react";
import "./timer.css";
import { CircularProgress } from "./CircularProgress";

type TimerProps = {
  seconds: number;
  width: string;
  backgroundColor?: string;
  accentColor?: string;
  textColor?: string;
};

export const Timer = ({
  seconds: countdownSeconds,
  width,
  backgroundColor,
  accentColor,
  textColor,
}: TimerProps) => {
  const [seconds, setSeconds] = useState(300);
  const [intervalId, setIntervalId] = useState(0);

  const timerStyles: Record<string, string | undefined> = {
    "--timer-width": width,
    "--primary-color": backgroundColor,
    "--accent-color": accentColor,
    "--text-color": textColor,
  };

  useEffect(() => {
    setSeconds(countdownSeconds);
  }, [countdownSeconds]);

  const handleClick = () => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      if (seconds === 0) {
        setSeconds(countdownSeconds);
      } else {
        return;
      }
    }

    const newIntervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          new Notification("Time's up!");
        }
        return prevSeconds > 1 ? prevSeconds - 1 : 0;
      });
    }, 1000);
    setIntervalId(newIntervalId as unknown as number);
  };

  const timeRemaining = useMemo(() => {
    const minutesDisplay = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;
    return `${minutesDisplay.toString().padStart(2, "0")}:${secondsDisplay
      .toString()
      .padStart(2, "0")}`;
  }, [seconds]);

  return (
    <div style={timerStyles} className="timer">
      <div className="timer-container">
        <CircularProgress percent={(seconds / countdownSeconds) * 100} />
        <h2 className="timer-display">{timeRemaining}</h2>
        <button className="timer-button" onClick={handleClick}>
          {!intervalId ? "START" : seconds === 0 ? "RESTART" : "PAUSE"}
        </button>
      </div>
    </div>
  );
};
