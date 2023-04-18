import React from 'react'
import CardItem from './CardItem'
import './Cards Browse.css';
import { Button } from './Button'
import Variables from './Variables'

const options = Variables.Questions

function CardsB() {

    const addCards = () =>{
        var i=0
        while(i<4){
            Variables.Questions.push({ id: 1})
            i++
        }
    }

  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='element-row'>
                {options.map((item,index) => {
                    return (
                        <CardItem
                        key={index}
                        question={item}
                        src= {Variables.Questions[index].img}
                        text={Variables.Questions[index].title}
                        label={Variables.Questions[index].label}
                        />
                    )
                })}
            </div>
            <Button onclick={addCards} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>More questions</Button>
        </div>
    </div>
  )
}

export default CardsB