import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Comment from './Comment'
import './ViewQuestion.css'
import Variables from './Variables'


function ViewQuestion(props) {

    const [comArr,setComArr] = useState(props.comment)


    useEffect(()=>{
        console.log("click",comArr)
    },[comArr])

    const AddComment = () =>{

        const check = Variables.isLoggedIn;
        if(check === true){
            setComArr([...comArr,{ User: Variables.Username, Comment: document.getElementById('comment').value}])
        }
        else{
            alert('You must do login before make a comment')
        }
    }

  return (
    <div className='page-full'>
        <div className='the-question'>
            <div className='question-div'>
                <h2 className="title">Question</h2>
                <hr className="line"></hr>
                <p className='question-content'>{props.question}{props.key}</p>
            </div>
            <div>
                <h2 className="title">Answer</h2>
                <hr className="line"></hr>
                <p className='question-content'>{props.answer}</p>
            </div>
            <div className='question-vote'>
                <Link className='vote-button'>Up</Link>
                <p>{props.votes}</p>
                <Link className='vote-button'>Down</Link>
            </div>
        </div>
        <div className='comment-input'>
            <h3 className='comment-text-title'>Post a Comment:</h3>
            <input className='comment-text-input' id='comment'type='text' placeholder='Enter your comment here'></input>
            <button onClick={AddComment} className="btn-comment btn btn--primary btn--large ">Submit</button>
        </div>
        <div className='comment-list'>
                {comArr.map((item,index) => {
                    return (
                        <Comment key={index} User={item.User} Comment={item.comment}></Comment>
                    )
                })}
        </div>
    </div>
  )
}

export default ViewQuestion