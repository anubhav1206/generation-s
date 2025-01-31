import { useEffect, useRef, useState } from 'react';
import { Controls } from "./controls /Controls";
import { LoadTrack } from "./loadTrack/LoadTrack";
import { ProgressBar } from "./progressbar/ProgressBar";
import { tracks } from "../../assets/track.js";
import "./audioPlayer.css"

//audio player where all the components are rendered and interact

export const AudioPlayer = (props) => {

    //set audio track from track.js which will eventually be pulled from the json file
    //get audio at index 0 of the tracks array of objects
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);

    const [isPlaying, setIsPlaying] = useState(false);
    //sets progression of track
    const [timeProgress, setTimeProgress] = useState(0);
    //sets duration of track in the loader & sends it to the progress bar
    const [duration, setDuration] = useState(0);

    // set audio ref to the audio element
    const audioRef = useRef(); 
    // set progress bar ref to the progress bar element
    const progressBarRef = useRef();

    return (

      <div className="interface-canvas">

      <div className="audio-player">
            {/* this component loads the audio track. It gets the src from currentTarck and sets it's ref.*/}
            {/*The ref will be passed in later on.*/}
            <LoadTrack 
              currentTrack={currentTrack}
              audioRef={audioRef}
              setDuration={setDuration}
              progressBarRef={progressBarRef}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              />
            {/* This component contains all the relative audio controllers */}
            <Controls 
              audioRef={audioRef} 
              progressBarRef={progressBarRef}
              duration={duration}
              setTimeProgress={setTimeProgress}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              isValid={props.isValid}
              setIsValid={props.setIsValid}        
            />
            {/* This component contains all the relative audio progression */}
            <ProgressBar 
              progressBarRef={progressBarRef} 
              audioRef={audioRef}
              timeProgress={timeProgress}
              duration={duration}
              />
      </div>
      </div>
    );
  };
