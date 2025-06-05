import { Timer } from "../lib/main";
import "./App.css";

const timers = [
  {
    description: "Responsive",
    seconds: 60,
    width: "clamp(8rem, 40vw, 18.75rem)",
  },
  {
    description: "Fixed size",
    seconds: 120,
    width: "300px",
  },
  {
    description: "Custom Colors",
    seconds: 180,
    width: "300px",
    backgroundColor: "#c74dbe",
    accentColor: "darkmagenta",
    textColor: "#512758",
  },
  {
    description: "With browser notification",
    seconds: 20,
    width: "300px",
    sendBrowserNotification: true,
  },
  {
    description: "Override timer styles",
    seconds: 20,
    width: "300px",
    timerStyles: {
      background: "linear-gradient(315deg, #2e325a 0%, #0e112a 100%)",
      "box-shadow":
        "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272c5a",
    },
  },
];

function App() {
  return (
    <>
      <header>
        <h1>React Timer Examples</h1>
      </header>
      <main className="examples">
        {timers.map((timer, index) => (
          <div>
            <p>{timer.description}</p>
            <Timer
              key={index}
              seconds={timer.seconds}
              width={timer.width}
              backgroundColor={timer.backgroundColor}
              accentColor={timer.accentColor}
              textColor={timer.textColor}
              sendBrowserNotification={timer.sendBrowserNotification}
              timerStyles={timer.timerStyles}
            />
          </div>
        ))}
        <div className="parent-width">
          <p>With height and width coming from the parent</p>
          <Timer seconds={20} />
        </div>
      </main>
    </>
  );
}

export default App;
