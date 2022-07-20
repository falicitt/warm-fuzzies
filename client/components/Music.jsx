import ReactAudioPlayer from 'react-audio-player';
import React from "react";

export default function Music() {
  
  return (
    <>
      <ReactAudioPlayer
        src="/music/wholesome.mp3"
        autoPlay
        controls          
        className='music'
      />
    </>
  )
}

   