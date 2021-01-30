import React from 'react'
import db from '../../db.json'
import QuizPage from '../../src/components/templates/QuizPage'
import { getRecords } from '../../src/utils'

export default function HomeQuiz ({ submittedAnswers }) {
  return (
    <QuizPage db={db} submittedAnswers={submittedAnswers} />
  )
}

export async function getServerSideProps (context) {
  const records = await getRecords()
  const submittedAnswers = records && records.map(record => record.fields)
  return {
    props: {
      submittedAnswers
    }
  }
}
