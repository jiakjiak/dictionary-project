import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Background from "./background.mp4";
import ReactAudioPlayer from "react-audio-player";

function App() {
  return (
    <div className="App">
      <video
        muted
        autoPlay={"autoplay"}
        preload="auto"
        loop
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="container">
        <header>
          THE BEGINNING OF <br /> WISDOM.
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>coded by JK</footer>
      </div>
    </div>
  );
}

export default App;
