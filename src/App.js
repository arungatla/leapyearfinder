import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setAnswer] = useState("");
  function leapyear(event) {
    var year = event.target.value;
    // if (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
      setAnswer(year + " is a leap year");
    } else {
      setAnswer(year + " is not a leap year");
    }
  }
  return (
    <div className="App">
      <h1>Leap year finder</h1>
      <textarea onChange={leapyear} placeholder="Enter the year"></textarea>
      <h2>{answer}</h2>
    </div>
  );
}
