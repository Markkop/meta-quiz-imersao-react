import { useState, useEffect } from 'react'
import { wait } from '../../../utils'
import QuizLogo from '../../atoms/QuizLogo'
import Quiz from '../../atoms/Quiz'
import QuestionWidget from '../../organisms/QuestionWidget'
import LoadingWidget from '../../organisms/LoadingWidget'
import ResultsWidget from '../../organisms/ResultsWidget'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

export default function QuizPage ({ db, submittedAnswers }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [results, setResults] = useState([])
  const totalQuestions = db.questions.length
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]

  function addResult (result) {
    setResults([...results, result])
  }

  useEffect(() => {
    wait(() => setScreenState(screenStates.QUIZ), 3000)
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
        <QuizLogo />
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

        {screenState === screenStates.RESULT && (
          <ResultsWidget
            results={results}
            submittedAnswers={submittedAnswers}
          />
        )}
      </Quiz.Container>
    </Quiz.Background>
  )
}
