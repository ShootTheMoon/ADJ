import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import { Button } from './Button'
import Variables from './Variables';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check this questions</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    key={0}
                    question={Variables.Questions[0]}
                    src = {Variables.Questions[0].img}
                    text = {Variables.Questions[0].title}
                    label = {Variables.Questions[0].label}
                    />
                    <CardItem
                    key={1}
                    question={Variables.Questions[1]}
                    src= {Variables.Questions[1].img}
                    text={Variables.Questions[1].title}
                    label={Variables.Questions[1].label}
                    />
                    <CardItem
                    key={2}
                    question={Variables.Questions[2]}
                    src= {Variables.Questions[2].img}
                    text={Variables.Questions[2].title}
                    label={Variables.Questions[2].label}
                    />
                    <CardItem
                    key={3}
                    question={Variables.Questions[3]}
                    src= {Variables.Questions[3].img}
                    text={Variables.Questions[3].title}
                    label={Variables.Questions[3].label}
                    />
                </ul>
            </div>
            <Button to={'/browser'} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>More questions</Button>
        </div>
    </div>
  )
}

export default Cards