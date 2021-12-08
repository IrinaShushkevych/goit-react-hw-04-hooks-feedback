import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [voice, setVoice] = useState({ good: 0, neutral: 0, bad: 0 });

  const onSetVoice = (type) => {
    setVoice((prevState) => {
      const obj = { ...prevState };
      obj[type] += 1;
      return obj;
    });
  };

  const objKey = Object.keys(voice);
  const total = objKey.reduce((total, el) => (total += voice[el]), 0);
  const positive = Math.round((voice.good / total) * 100);

  return (
    <div className="App">
      <Container title="Please leave feedback">
        <Feedback options={objKey} addVoice={onSetVoice} />
      </Container>
      <Container title="Statistics">
        {total > 0 ? (
          <Statistics
            options={voice}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    </div>
  );
}
