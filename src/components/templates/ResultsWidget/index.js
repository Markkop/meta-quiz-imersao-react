import Widget from '../../organisms/Widget'

function getNumberOfRightAnswers (results) {
  return results.filter(Boolean).length
}

function DetailedResult ({ result, index }) {
  const questionNumber = index + 1
  const resultText = result ? 'Acertou' : 'Errou'
  return (
    <li>
      {`# ${questionNumber} Resultado: ${resultText}`}
    </li>
  )
}

function ResultWidget ({ results }) {
  const numberOfRightAnswers = getNumberOfRightAnswers(results)
  const questionWord = numberOfRightAnswers === 1 ? 'pergunta' : 'perguntas'
  return (
    <Widget>
      <Widget.Header>
        Resultados:
      </Widget.Header>

      <Widget.Content>
        <p>
          {`Você acertou ${numberOfRightAnswers} ${questionWord}`}
        </p>
        <ul>
          {results.map((result, index) =>
            <DetailedResult
              result={result}
              index={index}
              key={index}
            />)}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

export default ResultWidget
