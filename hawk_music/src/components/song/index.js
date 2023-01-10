import React, { useEffect, useState } from 'react';
import {FaPlay} from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import Thumbnail from './music.png';

const Song = (props) => {
  const [isHovered, setHover] = useState(false);
  const oneSong = props.oneSong;

  return (
    <div className='one-song' id={props.index}>
      <div className='tile' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={Thumbnail} alt='music icon' className={isHovered === true ? 'icon dim' : 'icon'} />
        <Button size="sm" variant="primary" className={isHovered === true ? 'play-song' : 'hide'}>
          <Link to="/player" state={{songName:oneSong.song, artistName: oneSong.artist, uri:oneSong.url}} className="nav-link"><FaPlay className='fill' /></Link>
        </Button>
      </div>
      <div className='content'>
        <label id='songName'>{oneSong.song}</label><br />
        <label id='songArtist'>{oneSong.artist}</label>
      </div>
    </div>
  )
}
export default Song;
