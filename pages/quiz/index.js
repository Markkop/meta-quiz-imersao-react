import React from 'react'
import db from '../../db.json'
import QuizPage from '../../src/components/templates/QuizPage'

export default function HomeQuiz () {
  return (
    <QuizPage db={db} />
  )
}
