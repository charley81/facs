import React from 'react'
import questions from '../questions'
import Question from './question'

const Facts = () => {
  return (
    <div className="question-container">
      {questions.map(question => (
        <Question questions={questions} />
      ))}
    </div>
  )
}

export default Facts
