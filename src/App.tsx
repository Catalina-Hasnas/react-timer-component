import "./App.css";
import { Timer } from "react-timer-component";

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
            />
          </div>
        ))}
        <div>
          <p>With browser notification</p>
          <Timer seconds={20} width="300px" sendBrowserNotification />
        </div>
      </main>
    </>
  );
}

export default App;
