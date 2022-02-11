import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Background from "./background.mp4";
import Audio from "./audio/SolarSymphony.mp3";
import Footer from "./Footer";

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

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <header>
              THE BEGINNING OF <br /> WISDOM.
            </header>
          </div>
        </div>

        <main>
          <Dictionary />
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </div>
  );
}

class AudioPlayer extends React.Component {
  render() {
    return (
      <div className="audioPlayer">
        <audio ref="audio_tag" src={Audio} controls autoPlay loop />
      </div>
    );
  }
}
export default App;
