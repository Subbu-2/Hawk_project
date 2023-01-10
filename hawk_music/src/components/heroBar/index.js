import React,{useState} from 'react';
import BrandLogo from '../brandlogo';
import './index.scss';

const HeroBar = () => {
  const [active,setActive] = useState('nav-menu');
  const [toggleIcon,setToggleIcon] = useState('nav-toggler');
  const navToggle = () => {
    active === 'nav-menu' ? setActive('nav-menu nav-active'): setActive('nav-menu');
    toggleIcon === 'nav-toggler' ? setToggleIcon('nav-toggler toggle'): setToggleIcon('nav-toggler');
  }
  return (
    <div className='top-menu'>
      <nav className="nav">
        <a href="/" className="nav-brand"><BrandLogo/></a>
        <ul className={active}>
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/playlists" className="nav-link">PlayLists</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  )
}
export default HeroBar;
