import { useState } from 'react'
import Button from '../../atoms/Button'
import BackLinkArrow from '../../atoms/BackLinkArrow'
import Widget from '../../molecules/Widget'
import AlternativesForm from '../../atoms/AlternativesForm'
import { wait } from '../../../utils'

function Alternative ({
  alternative,
  alternativeIndex,
  isCorrect,
  selectedAlternative,
  questionIndex,
  isQuestionSubmited,
  setSelectedAlternative
}) {
  const alternativeId = `alternative__${alternativeIndex}`
  const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
  const isSelected = selectedAlternative === alternativeIndex
  const questionId = `question__${questionIndex}`

  return (
    <Widget.Topic
      as="label"
      key={alternativeId}
      htmlFor={alternativeId}
      data-selected={isSelected}
      data-status={isQuestionSubmited && alternativeStatus}
        >
      <input
        style={{ display: 'none' }}
        id={alternativeId}
        name={questionId}
        onChange={() => setSelectedAlternative(alternativeIndex)}
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

function QuestionWidget ({ question, questionIndex, totalQuestions, addResult, handleQuizPagination }) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined
  const { image, title, description, alternatives } = question

  function handleAlternativeSubmit (event) {
    event.preventDefault()
    setIsQuestionSubmited(true)
    wait(() => {
      addResult(isCorrect)
      setIsQuestionSubmited(false)
      setSelectedAlternative(undefined)
      handleQuizPagination()
    }, 3000)
  }

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

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
              key={alternativeIndex}
            />)}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && <AfterConfirmText text={question.afterConfirmText} isCorrect={isCorrect} />}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget
