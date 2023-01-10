import React from 'react'
import PlayCategory from './components/playCategory';
import categories from './category';
import './App.scss';

const Playlist = () => {
  return (
      <div className='content-container'>
          <PlayCategory category={categories[1]} />
      </div>
  )
}

export default Playlist