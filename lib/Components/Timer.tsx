import "./timer.css";
import { useEffect, useMemo, useState } from "react";
import { CircularProgress } from "./CircularProgress";

type TimerProps = {
  seconds: number;
  width?: string;
  backgroundColor?: string;
  accentColor?: string;
  textColor?: string;
  sendBrowserNotification?: boolean;
  timerStyles?: Record<string, string>;
};

export const Timer = ({
  seconds: countdownSeconds,
  width,
  sendBrowserNotification = false,
  backgroundColor,
  accentColor,
  textColor,
  timerStyles: timerStylesInit,
}: TimerProps) => {
  const [seconds, setSeconds] = useState(300);
  const [intervalId, setIntervalId] = useState(0);

  const timerStyles: Record<string, string | undefined> = {
    "--timer-width": width,
    "--primary-color": backgroundColor,
    "--accent-color": accentColor,
    "--text-color": textColor,
    ...timerStylesInit,
  };

  useEffect(() => {
    setSeconds(countdownSeconds);
  }, [countdownSeconds]);

  const handleClick = () => {
    if (sendBrowserNotification) {
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

    const newIntervalId = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (sendBrowserNotification && prevSeconds === 1) {
          new Notification("Time's up!");
        }
        return prevSeconds > 1 ? prevSeconds - 1 : 0;
      });
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const timeRemaining = useMemo(() => {
    const minutesDisplay = Math.floor(seconds / 60);
    const secondsDisplay = seconds % 60;
    return `${minutesDisplay.toString().padStart(2, "0")}:${secondsDisplay
      .toString()
      .padStart(2, "0")}`;
  }, [seconds]);

  return (
    <section
      role="region"
      aria-label="circular countdown"
      style={timerStyles}
      className="timer-lib-component"
    >
      <div className="timer-lib-container">
        <CircularProgress percent={(seconds / countdownSeconds) * 100} />
        <time dateTime={timeRemaining} className="timer-lib-display">
          {timeRemaining}
        </time>
        <button
          aria-label={
            !intervalId ? "START" : seconds === 0 ? "RESTART" : "PAUSE"
          }
          className="timer-lib-button"
          onClick={handleClick}
        >
          {!intervalId ? "START" : seconds === 0 ? "RESTART" : "PAUSE"}
        </button>
      </div>
    </section>
  );
};
