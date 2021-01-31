import Widget from '../../molecules/Widget'
import ExternalQuizItem from '../../molecules/ExternalQuizItem'

export default function ExternalQuizesWidget ({ enrichedExternal }) {
  return (
    <Widget>
      <Widget.Content>
        <h1>Quizes da Galera</h1>
        <p>
          Jogue um quiz de outro DEV usando as funcionalidades deste projeto!
        </p>
        <ul>
          {enrichedExternal.map(externalQuiz =>
            <ExternalQuizItem
              externalQuiz={externalQuiz}
              key={externalQuiz.projectName}
             />
          )}
        </ul>
      </Widget.Content>
    </Widget>
  )
}
