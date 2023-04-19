import React from 'react'
import './AddQuestion.css'
import Variables from './Variables'

function AddQuestion() {

  const Upload= ()=>{

    Variables.Questions.push({ 
    id: Variables.Questions.length,
    img: 'images/C-Sharp.png',
    title:document.getElementById('Title').value,
    label: document.getElementById('Topic').value,
    Question: document.getElementById('Question').value,
    answer: document.getElementById('Answer').value,
    vote:0,
    comments:[]},)
  }


  return (
    <div className='add-question'>
        <form className='question-form'>
            <div className='title-wrap'>
              <input type='text' id='Title' className='question-title' placeholder='Title'></input>
            </div>
            <div className='question-input-wrap'>
                <textarea type='text' id='Question' className='question-input' placeholder='Type the question here'></textarea>
            </div>
            <div className='question-answer'>
                <input type='text' id='Topic' className='question-answer-input' placeholder='Topic'></input>
                <input type='text' id='Answer' className='question-topic' placeholder='Answer'></input>
            </div>
            <div className='btn-submit'>
                <button className={`btn btn--outline btn--large`} onClick={Upload} type='reset'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddQuestion