import React from 'react'
import '../../App.css'
import ViewQuestion from '../ViewQuestion'
import {useParams } from 'react-router-dom'
import Variables from '../Variables'

export default function Question(){

    const { key } = useParams()

    return (
    <>
        <ViewQuestion
        question={Variables.Questions[key].Question}
        answer={Variables.Questions[key].answer}
        votes={Variables.Questions[key].vote}
        comment={Variables.Questions[key].comments}
        ></ViewQuestion>
    </>
)}   