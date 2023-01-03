import React from 'react';
import ReactHowler, { Howl } from 'howler';
import { Button } from 'react-bootstrap';
import Thumbnail from '../song/music.png';
import { FaPlay } from 'react-icons/fa';
import './index.scss'

function Player(props) {
    const src = "D:/Hawk_project/Backend/music/Har Har Shambhu Shiv Mahadeva (feat_ Abhilipsa Panda).MP3";

    const playSong = (src) => {
        const sound = new Howl({
            src: ['...'],
            ext: ['mp3'],
            autoplay: true,
            html5: true
        });
        sound.play()
    }
    return (
    <div className='modal-container'>
        <div className='modal-content'>
            <h4>Song Name : {props.oneSong.song}</h4>
            <h4>Artist Name : {props.oneSong.artist}</h4>
        </div>
        <div className='song-thumbnail'>
            <img src={Thumbnail} alt='music icon' className='song-image'/>
        </div>
        <div className="player-bottom">
            <Button onClick={() => playSong(src)} className='naked-button'> <FaPlay className='fill' /> </Button>
        </div>
    </div>
    )
}

export default Player