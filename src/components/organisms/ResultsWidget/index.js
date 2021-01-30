import Widget from '../../molecules/Widget'
import BackLinkArrow from '../../atoms/BackLinkArrow'
import { useRouter } from 'next/router'
import { saveRecord } from '../../../utils'

function getPlayerName () {
  const router = useRouter()
  return router.query.name
}

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

function sumScoreFromPlayerResult (playerResult) {
  const rightScoreValue = 20
  return playerResult.reduce((score, isCorrectAnswer) => {
    return score + isCorrectAnswer ? rightScoreValue : 0
  }, 0)
}

function mapSubmittedResultsToListItems ({ Name, Score, isLocalPlayer }, index) {
  return (
    <li
      data-local-player={isLocalPlayer}
      key={index}
    >
      {`${Name}: ${Score}`}
    </li>
  )
}

function ScoreBoard ({ playerRecord, submittedAnswers }) {
  submittedAnswers.push({
    ...playerRecord,
    isLocalPlayer: true
  })

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

function ResultWidget ({ results, submittedAnswers }) {
  const numberOfRightAnswers = getNumberOfRightAnswers(results)
  const questionWord = numberOfRightAnswers === 1 ? 'pergunta' : 'perguntas'
  const playerName = getPlayerName()
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
          {`Aqui estão seus resultados, ${playerName}:`}
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
