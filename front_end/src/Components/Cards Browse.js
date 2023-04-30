import React from 'react'
import CardItem from './CardItem'
import './Cards Browse.css';
import Variables from './Variables'
import { useEffect} from 'react';

const options = Variables.Questions

function CardsB() {

    useEffect(() => {
        
    }, [])


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
        </div>
    </div>
  )
}

export default CardsB