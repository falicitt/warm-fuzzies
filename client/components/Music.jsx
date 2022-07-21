import ReactAudioPlayer from 'react-audio-player';
import React from "react";


export default function Music() {
  // const audio = new Audio(
  //   "/music/wholesome.mp3"
  // );
  
  // const [playing, setPlaying] =useState (false)
  // console.log(playing)
  
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

   

