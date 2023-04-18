import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import './SearchBar';
import SearchBar from './SearchBar';
import LoginPopUp from './LoginPopUp';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [login, setLogin] = useState(false);
  const handleClick= () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [buttonPopup, setButtonPopup] = useState(false);

  const showButton= () =>{
    if(window.innerWidth<=960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  useEffect(()=>{
    showButton()
  },[]);

  window.addEventListener('resize',showButton)

  if(login === true){
    return(
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    ADJ
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <AiOutlineClose color='#fff'/>:<AiOutlineMenu color='#fff'/>}
                </div>
                <div className='search-bar'>
                  <SearchBar></SearchBar>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                      Create Question
                    </Link>
                  </li>
                  <li>
                    <Link to='/browser' className='nav-links' onClick={closeMobileMenu}>
                      Browse Question
                    </Link>
                  </li>
                  <li>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      <AiOutlinePoweroff/>
                    </Link>
                  </li>
                </ul>
                {button && <Link> <AiOutlinePoweroff color='#fff'/></Link>}
            </div>
        </nav>
    </>
    )
  }
  else{

    return (
      <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                      ADJ
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                    {click ? <AiOutlineClose color='#fff'/>:<AiOutlineMenu color='#fff'/>}
                  </div>
                  <div className='search-bar'>
                    <SearchBar></SearchBar>
                  </div>
                  <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                        Create Question
                      </Link>
                    </li>
                    <li>
                      <Link to='/browser' className='nav-links' onClick={closeMobileMenu}>
                        Browse Question
                      </Link>
                    </li>
                    <li>
                      <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  {button && <Button onclick={()=> setButtonPopup(true)} buttonStyle='btn--outline'>Sign In</Button>}
              </div>
          </nav>
          <LoginPopUp logConfirm={setLogin} trigger={buttonPopup} setTrigger={setButtonPopup}></LoginPopUp>
      </>
    )
}
}

export default Navbar