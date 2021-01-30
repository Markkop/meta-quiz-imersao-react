import React from 'react'
import db from '../db.json'
import Quiz from '../src/components/organisms/Quiz'
import QuestionWidget from '../src/components/templates/QuestionWidget'
import LoadingWidget from '../src/components/templates/LoadingWidget'
import ResultsWidget from '../src/components/templates/ResultsWidget'
import { wait } from '../src/utils'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

export default function QuizPage () {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const [results, setResults] = React.useState([])
  const totalQuestions = db.questions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  function addResult (result) {
    setResults([...results, result])
  }

  React.useEffect(() => {
    wait(() => setScreenState(screenStates.QUIZ))
  }, [])

  function handleQuizPagination () {
    const nextQuestion = questionIndex + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <Quiz.Background backgroundImage={db.bg}>
      <Quiz.Container>
        <Quiz.Logo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            handleQuizPagination={handleQuizPagination}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultsWidget results={results} />}
      </Quiz.Container>
    </Quiz.Background>
  )
}
