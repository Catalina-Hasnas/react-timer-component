# React Timer Component

The `Timer` component is a circular countdown timer that provides visual feedback on the time remaining, with a start/ restart/ pause button. It can send browser notification when the timer is finished. It was initially created for this [Pomodoro App Challenge](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G), but it can be used in various situations.

## Props

The `Timer` component accepts the following props:

- `seconds` (required): The initial countdown time in seconds.
- `width` (optional): The width (and height) of the timer. It should be a valid CSS width value. If not provided, then the height and width should come from the parent element.
- `backgroundColor` (optional): The background color of the timer. It should be a valid CSS color value.
- `accentColor` (optional): The accent color of the timer. It will be the color of the circle stroke and the button outline on hover. It should be a valid CSS color value.
- `textColor` (optional): The text color of the timer. It should be a valid CSS color value.
- `sendBrowserNotification` (optional): A boolean value that determines whether to send a browser notification when the timer reaches zero. If the browser supports notifications, it will prompt the user to grant permission for receiving notifications when the ‘START’ button is clicked. The default value is `false`.
- `timerStyles` (optional): An object that allows you to override the timer's styles. The keys should be valid CSS property names and the values should be valid CSS values.

## Usage

Here's an example of how to use the `Timer` component:

```jsx
import { Timer } from "@catalinahasnas/react-timer-component";

<Timer
  seconds={300}
  width="clamp(18.75rem, 50vw, 25.625rem)"
  backgroundColor="#f5f5f5"
  accentColor="#ff6347"
  textColor="#000"
  sendBrowserNotification
  timerStyles={{ margin: "auto" }}
/>;
```

In this example, the timer will start at 5 minutes (300 seconds). It will have a responsive width, a background color of `#f5f5f5`, an accent color of `#ff6347`, and a text color of `#000`. When the timer reaches zero, it will send a browser notification. The timer will also have margin set to auto.
