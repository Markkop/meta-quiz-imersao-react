import ResultListItem from '../../atoms/ResultListItem'
import styled from 'styled-components'

const Question = styled.p`
    font-weight: bold;
`

export default function DetailedResult ({ questions, result, index }) {
  const question = questions[index]
  const questionNumber = index + 1
  const questionTitle = question.title
  const alternatives = question.alternatives
  return (
    <ResultListItem
      data-result={result.isCorrect}
      >
      <Question>
        {`${questionNumber}) ${questionTitle}`}
      </Question>
      <p>
        {`Você respondeu: ${alternatives[result.selectedAlternative]}`}
      </p>
      {!result.isCorrect && <p> {`O certo era: ${question.alternatives[question.answer]}`} </p> }
    </ResultListItem>
  )
}
