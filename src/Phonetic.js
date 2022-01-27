import React, { useState } from "react";

export default function Phonetic(props) {
  //console.log(props.phonetic);

  return (
    <div className="phonetic">
      <i class="far fa-play-circle"></i> {props.phonetic.text}
    </div>
  );
}
