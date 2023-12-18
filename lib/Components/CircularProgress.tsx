import "./timer.css";

const radius = 44;
const xy = 50;
const dashArr = 300;

export const CircularProgress = ({ percent }: { percent: number }) => {
  const strokeDashOffsetBar = ((100 - percent) / 100) * dashArr;

  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="timer-lib-svg"
      aria-labelledby="title desc"
    >
      <title id="title">Progress Bar</title>
      <desc id="desc">A circular progress bar showing {percent}% progress</desc>
      <circle
        r={radius}
        cx={xy}
        cy={xy}
        fill="transparent"
        strokeDasharray={dashArr}
        strokeDashoffset="0"
        style={{
          strokeDashoffset: `-${strokeDashOffsetBar}px`,
        }}
      />
    </svg>
  );
};
