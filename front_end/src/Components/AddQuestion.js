import React from 'react'
import './AddQuestion.css'

function AddQuestion() {

  const Upload= ()=>{
    console.log(document.getElementById('Title').value)
    console.log(document.getElementById('Question').value)
    console.log(document.getElementById('Answer').value)
    console.log(document.getElementById('Topic').value)
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