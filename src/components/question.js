import React, { useState } from 'react'
import { AiFillFolderOpen, AiFillCloseCircle } from 'react-icons/ai'

const Question = ({ question, answer }) => {
  const [getAnswer, setGetAnswer] = useState(false)

  const showAnswer = () => {
    setGetAnswer(!getAnswer)
  }

  return (
    <div className="question">
      <h3>
        {question}{' '}
        <button className="icon-btn" onClick={showAnswer}>
          {getAnswer ? (
            <AiFillCloseCircle className="icon" />
          ) : (
            <AiFillFolderOpen className="icon" />
          )}
        </button>
      </h3>
      <p>{getAnswer ? answer : ''}</p>
    </div>
  )
}

export default Question
