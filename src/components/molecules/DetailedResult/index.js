import ResultListItem from '../../atoms/ResultListItem'

export default function DetailedResult ({ questions, result, index }) {
  const question = questions[index]
  const questionNumber = index + 1
  const questionTitle = question.title
  const alternatives = question.alternatives
  return (
    <ResultListItem
      data-result={result.isCorrect}
      >
      <p style={{ fontWeight: 'bold' }}>
        {`${questionNumber}) ${questionTitle}`}
      </p>
      <p>
        {`Você respondeu: ${alternatives[result.selectedAlternative]}`}
      </p>
      {!result.isCorrect && <p> {`O certo era: ${question.alternatives[question.answer]}`} </p> }
    </ResultListItem>
  )
}
