import React from 'react'
import PlayCategory from './components/playCategory';
import categories from './category';
import './App.scss';

const Home = () => {
  return (
      <div className='content-container'>
          {categories.map((category, i) => (<PlayCategory category={category} index={i} />))}
      </div>
  )
}

export default Home