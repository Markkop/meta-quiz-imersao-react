import Widget from '../../molecules/Widget'
import BackLinkArrow from '../../atoms/BackLinkArrow'
import ResultListItem from '../../atoms/ResultListItem'
import { useRouter } from 'next/router'
import { saveRecord } from '../../../utils'

function getPlayerName () {
  const router = useRouter()
  return router.query.name
}

function getNumberOfRightAnswers (results) {
  return results.filter(result => result.isCorrect).length
}

function DetailedResult ({ questions, result, index }) {
  const question = questions[index]
  const questionNumber = index + 1
  const questionTitle = question.title
  const alternatives = question.alternatives
  return (
    <ResultListItem
      data-result={result.isCorrect}
    >
      <p>
        <strong>
          {`${questionNumber}) ${questionTitle}`}
        </strong>
      </p>
      <p>
        {`Você respondeu: ${alternatives[result.selectedAlternative]}`}
      </p>
      {!result.isCorrect && <p>
        {`O certo era: ${question.alternatives[question.answer]}`}

      </p>
}
    </ResultListItem>
  )
}

function sumScoreFromPlayerResult (playerResult) {
  const rightScoreValue = 20
  return playerResult.reduce((score, result) => {
    return score + (result.isCorrect ? rightScoreValue : 0)
  }, 0)
}

function mapSubmittedResultsToListItems ({ Name, Score, isLocalPlayer }, index) {
  return (
    <ResultListItem
      data-local-player={isLocalPlayer}
      key={index}
    >
      {`${Name}: ${Score}`}
    </ResultListItem>
  )
}

function ScoreBoard ({ playerRecord, submittedAnswers }) {
  submittedAnswers.push({
    ...playerRecord,
    isLocalPlayer: true
  })

  submittedAnswers = submittedAnswers.sort((a, b) => b.Score > a.Score)

  return (
    <Widget>
      <Widget.Header>
        Placar:
      </Widget.Header>
      <Widget.Content>
        <ul>
          {submittedAnswers.map(mapSubmittedResultsToListItems)}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

function ResultWidget ({ questions, results, submittedAnswers }) {
  const numberOfRightAnswers = getNumberOfRightAnswers(results)
  const questionWord = numberOfRightAnswers === 1 ? 'pergunta' : 'perguntas'
  const playerName = getPlayerName()
  const resultTextSuffix = playerName ? `, ${playerName}` : ''
  const playerScore = sumScoreFromPlayerResult(results)
  const playerRecord = { Name: playerName, Score: playerScore }
  if (submittedAnswers) {
    saveRecord(playerRecord)
  }
  return (
    <>
      <Widget>
        <Widget.Header>
          <BackLinkArrow href="/" />
          {`Aqui estão seus resultados${resultTextSuffix}`}
        </Widget.Header>

        <Widget.Content>
          <p>
            {`Você acertou ${numberOfRightAnswers} ${questionWord}`}
          </p>
          <ul>
            {results.map((result, index) =>
              <DetailedResult
                questions={questions}
                result={result}
                index={index}
                key={index}
            />)}
          </ul>
        </Widget.Content>
      </Widget>
      { submittedAnswers && (
        <ScoreBoard
          submittedAnswers={submittedAnswers}
          playerRecord={playerRecord}
        />
      ) }
    </>
  )
}

export default ResultWidget
