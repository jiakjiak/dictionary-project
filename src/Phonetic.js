import React from "react";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <i class="far fa-play-circle" onClick={start}></i> {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="phonetic">{props.phonetic.text}</div>;
  }
}
