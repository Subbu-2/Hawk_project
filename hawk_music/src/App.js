import React, {useEffect,useState} from 'react';
import './App.scss';
import HeroBar from './components/heroBar';
import PlayCategory from './components/playCategory';
import categories from './category';

const App = () => {
  console.log(categories)
  return (
       <body>
        <HeroBar />
        <div className='content-container'>
          {categories.map((category,i) => ( <PlayCategory category = {category} index={i} />))}
        </div>
      </body>
  );
}

export default App;
