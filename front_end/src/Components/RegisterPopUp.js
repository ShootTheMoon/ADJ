import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';
import './LoginPopUp.css'
import { AiOutlineClose} from "react-icons/ai";

function RegisterPopUp(props) {

    const createUser = () =>{

        const Email = document.getElementById('EmailReg').value
        const Username = document.getElementById('UsernameReg').value
        const Password = document.getElementById('PasswordReg').value

        const check = true;

        if(check === true){
            alert("Account Created succesfull")
        }else{
            alert("Email or User or Password invalid")
        }   

    }

  return (props.trigger) ?(
    <div className='pop-up'>
        <div className='pop-up-inner'>
            <Link onClick={() => props.setTrigger(false)} className='btn-close'>
                <AiOutlineClose/>
            </Link>
            <h1>Sing Up</h1>
            <form className='login-form'>
                <div className='input-field'>
                    <input type='email' id='EmailReg' placeholder='E-mail'></input>
                </div>
                <div className='input-field'>
                    <input type='text' id='UsernameReg' placeholder='Username'></input>
                </div>
                <div className='input-field'>
                    <input type='password' id='PasswordReg' placeholder='Password'></input>
                </div>
                <Button onclick={createUser} buttonStyle='btn--primary'>Sign Up</Button>
            </form>
            {props.children}
        </div>
    </div>
  ) : '';
}

export default RegisterPopUp