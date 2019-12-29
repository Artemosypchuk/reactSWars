import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import swComponent from './swComponent.css'


export default props => {
    return (
      <div className='video'>
    <Player
      autoPlay
      poster="/assets/poster.png"
      src="https://youtu.be/14EztMXh5vQ"
    >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
    </Player></div>
  );
};