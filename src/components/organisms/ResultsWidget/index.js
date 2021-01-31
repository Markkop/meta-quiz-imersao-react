import Widget from '../../molecules/Widget'
import BackLinkArrow from '../../atoms/BackLinkArrow'
import DetailedResult from '../../molecules/DetailedResult'
import ScoreBoard from '../../molecules/ScoreBoard'
import { useRouter } from 'next/router'
import { saveRecord } from '../../../utils'

function getPlayerName () {
  const router = useRouter()
  return router.query.name
}

function getNumberOfRightAnswers (results) {
  return results.filter(result => result.isCorrect).length
}

function sumScoreFromPlayerResult (playerResult) {
  const rightScoreValue = 20
  return playerResult.reduce((score, result) => {
    return score + (result.isCorrect ? rightScoreValue : 0)
  }, 0)
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
