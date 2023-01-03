import React,{useEffect,useState} from 'react';
import Song from '../song/index.js'
import './index.scss'

function Playcategory(props) {
    const [backEndData,setBackEnddata] = useState([{}])
  useEffect(()=> {
    fetch("/api").then(
      response =>response.json()
    ).then(
      data =>{
        setBackEnddata(data)
      }
    )
  },[])
  let playList = typeof backEndData.lists === 'undefined' ? 'null' : (props.category === 'Your Frequent Plays' ? backEndData.lists.FreqPlay : backEndData.lists.TopPlay)
 
  return (
    <div id={props.index}>
      <h2 className='head-name'>{props.category}</h2><br />
      <div className="song-tile">
        {(typeof backEndData.lists === 'undefined') ? (
          <p>loading...</p>
        ) : (
          playList.map((list, i) => (<Song index={i} oneSong={list} />))
        )}
      </div>
    </div>
  )
}

export default Playcategory