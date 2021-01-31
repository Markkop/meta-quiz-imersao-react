import { useState } from 'react'
import Button from '../../atoms/Button'
import Cat from '../../atoms/Cat'
import BackLinkArrow from '../../atoms/BackLinkArrow'
import Widget from '../../molecules/Widget'
import ProgressBar from '../../molecules/ProgressBar'
import AlternativesForm from '../../atoms/AlternativesForm'
import { motion } from 'framer-motion'

function Alternative ({
  alternative,
  alternativeIndex,
  isCorrect,
  selectedAlternative,
  questionIndex,
  isQuestionSubmited,
  setSelectedAlternative,
  anwerIndex
}) {
  const alternativeId = `alternative__${alternativeIndex}`
  const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
  const isSelected = selectedAlternative === alternativeIndex
  const isCorrectAlternative = isQuestionSubmited && alternativeIndex === anwerIndex
  const questionId = `question__${questionIndex}`
  return (
    <Widget.Topic
      as={motion.label}
      whileHover={!isQuestionSubmited && !isSelected && { scale: 1.1 }}
      scale={isSelected ? 1.1 : 1}
      animate={isCorrectAlternative && { scale: [1.2, 1, 1.2, 1] }}
      key={alternativeId}
      htmlFor={alternativeId}
      data-selected={isSelected}
      data-status={isQuestionSubmited && alternativeStatus}
      data-correct-answer={isCorrectAlternative}
        >
      <input
        style={{ display: 'none' }}
        id={alternativeId}
        name={questionId}
        checked={isSelected}
        onChange={() => setSelectedAlternative(alternativeIndex)}
        disabled={isQuestionSubmited}
        type="radio"
        />
      {alternative}
    </Widget.Topic>
  )
}

function AfterConfirmText ({ text, isCorrect }) {
  const rightAnswerText = 'Boa! Você acertou!'
  const wrongAnswerText = 'Putz, você errou!'
  return <p>{text || (isCorrect ? rightAnswerText : wrongAnswerText) }</p>
}

function QuestionWidget ({
  question,
  questionIndex,
  totalQuestions,
  addResult,
  handleQuizPagination,
  isHomeQuiz
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined
  const isLastQuestion = questionIndex + 1 === totalQuestions
  const { image, title, description, alternatives } = question
  const barPercentage = ((questionIndex + 1) / totalQuestions) * 100

  function handleAlternativeSubmit (event) {
    event.preventDefault()
    setIsQuestionSubmited(true)
  }

  function handleNextQuestionClick (event) {
    event.preventDefault()
    handleQuizPagination()
    setIsQuestionSubmited(false)
    setSelectedAlternative(undefined)
    addResult(isCorrect)
  }

  return (
    <Widget>
      { questionIndex === 0 && isHomeQuiz && <Cat /> }
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <ProgressBar barPercentage={barPercentage} />

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={image}
        />
      <Widget.Content>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>

        <AlternativesForm onSubmit={handleAlternativeSubmit} >
          {alternatives.map((alternative, alternativeIndex) =>
            <Alternative
              alternative={alternative}
              alternativeIndex={alternativeIndex}
              isCorrect={isCorrect}
              selectedAlternative={selectedAlternative}
              questionIndex={questionIndex}
              isQuestionSubmited={isQuestionSubmited}
              setSelectedAlternative={setSelectedAlternative}
              anwerIndex={question.answer}
              key={alternativeIndex}
            />
          )}
          {
            isQuestionSubmited
              ? <Button type="button" onClick={handleNextQuestionClick}>
                {isLastQuestion ? 'Finalizar' : 'Próxima pergunta'}
              </Button>
              : <Button type="submit" disabled={!hasAlternativeSelected}>
                Confirmar
              </Button>
          }
          {isQuestionSubmited && <AfterConfirmText text={question.afterConfirmText} isCorrect={isCorrect} />}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget
