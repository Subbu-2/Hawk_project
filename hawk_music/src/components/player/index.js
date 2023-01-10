import React, { useState, useEffect } from 'react';
import ReactHowler, { Howl } from 'howler';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Thumbnail from '../song/music.png';
import { FaChevronLeft, FaPause, FaPlay, FaChevronRight } from 'react-icons/fa';
import './index.scss'

function Player() {
    const src = "https://breadbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse";
    let details;
    const location = useLocation()
    const [locationState, setLocationState] = useState({songName:'',artistName:'',url:''})
    useEffect(() =>{
        if(location.state){
            setLocationState(location.state)
        }
    },[location])
    const [playbutton, setPlayButton] = useState(true)
    const playSong = (src) => {
        const sound = new Howl({
            src: ['...'],
            ext: ['mp3'],
            autoplay: true,
            html5: true
        });
        sound.play();
        playbutton === true ? setPlayButton(false):setPlayButton(true);
    }
    return (
    <div className='player-container'>
        <div className='player-content'>
            <div className='text-style'>
            <h4>{locationState.songName}</h4>
            <h4>{locationState.artistName}</h4>
            </div>
        
        <div className='song-thumbnail'>
            <img src={Thumbnail} alt='music icon' className='song-image'/>
        </div>
        <div className="player-button">
        <Button  className='naked-button prev'> <FaChevronLeft className='fill' /> </Button>
        {playbutton && <Button onClick={() => playSong(locationState.url)} className='naked-button play'> <FaPlay size={'2em'} className='fill' /> </Button>}
        {!playbutton && <Button onClick={() => playSong(src)} className='naked-button play'> <FaPause size={'2em'} className='fill' /> </Button>}
        <Button  className='naked-button next'> <FaChevronRight className='fill' /> </Button>
        </div>
        </div>
    </div>
    )
}

export default Player