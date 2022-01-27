import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  let [sound, setSound] = useState(null);

  function audio(event) {
    setSound(event.props.phonetic.audio);
    <ReactAudioPlayer src={sound} onPlay controls />;

    return (
      <div className="phonetic">
        <i class="far fa-play-circle" onClick={audio}></i> {props.phonetic.text}
      </div>
    );
  }
}
