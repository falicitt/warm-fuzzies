import ReactAudioPlayer from 'react-audio-player';
import React from "react";
<<<<<<< HEAD

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

   
=======
// import { useEffect } from 'react';





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

   

>>>>>>> 867ff76780c80e1b8f822e4b648c2f64753bca0f
