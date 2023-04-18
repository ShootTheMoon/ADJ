import React, {useState} from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';
import './LoginPopUp.css'
import RegisterPopUp from './RegisterPopUp';
import { AiOutlineClose} from "react-icons/ai";

function LoginPopUp(props) {

  const [RbuttonPopup, setRButtonPopup] = useState(false);

  const checkLogin =()=>{

    const Email = document.getElementById('Email').value
    const Password = document.getElementById('Password').value

    const check = false;

    if(check === true){
      props.logConfirm(true)
    }else{
      alert("Email or Password invalid")
    }

  }

  const PopUp = () =>{
    setRButtonPopup(true);
    props.setTrigger(false);
  }

  return (props.trigger) ?(
    <div className='pop-up'>
        <div className='pop-up-inner'>
            <Link onClick={() => props.setTrigger(false)} className='btn-close'>
              <AiOutlineClose/>
            </Link>
            <h1>Sing In</h1>
            <form className='login-form'>
                <div className='input-field'>
                    <input type='email' id='Email' placeholder='E-mail'></input>
                </div>
                <div className='input-field'>
                    <input type='password' id='Password' placeholder='Password'></input>
                </div>
                <Button onclick={checkLogin} buttonStyle='btn--primary'>Sign In</Button>
            </form>
            <p>Not a user? <Link className='register-link' onClick={PopUp}>Register right now!!</Link></p>
            {props.children}
        </div>
    </div>
  ) : <RegisterPopUp trigger={RbuttonPopup} setTrigger={setRButtonPopup}></RegisterPopUp>;
  
}

export default LoginPopUp