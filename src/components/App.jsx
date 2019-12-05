import React, { useState } from "react";

function App() {
  let [headingText, setHeadingText] = useState("hello");
  let [mouseOver, setMouseOver] = useState(false);

  function handleClick() {
    console.log("clicked");
    //headingText = "wecome User";
    setHeadingText("welcome");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseout() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
