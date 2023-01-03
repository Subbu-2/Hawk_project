import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {FaPlay} from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import Player from '../player/index.js';
import './index.scss';
import Thumbnail from './music.png';

const Song = (props) => {
  const Howl = require('react-howler');
  const [isHovered, setHover] = useState(false);
  const [isPlaying,setIsPlaying] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const oneSong = props.oneSong;
  const playAudio = props.oneSong.url;
  const openPlayer = () =>{
    setModalIsOpen(true)
  }
  const closePlayer = () =>{
    setModalIsOpen(false)
  }
  return (
    <div className='one-song' id={props.index}>
      <div className='tile' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={Thumbnail} alt='music icon' className={isHovered === true ? 'icon dim' : 'icon'} />
        <Button size="sm" variant="primary" onClick={openPlayer} className={isHovered === true ? 'play-song' : 'hide'}>
          <FaPlay className='fill' />
        </Button>
      </div>
      <div className='content'>
        <label id='songName'>{oneSong.song}</label><br />
        <label id='songArtist'>{oneSong.artist}</label>
      </div>
      <Modal isOpen={modalIsOpen} className='modal-style'>
        <AiFillCloseCircle onClick={closePlayer} className='outline'/>
        <div className="player-postion"><Player oneSong={oneSong}/></div>
      </Modal>
    </div>
  )
}
export default Song;
