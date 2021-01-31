import styled from 'styled-components'
import Widget from '../Widget'

const ScoreBoardListItem = styled.li`
  display: flex;
  justify-content: space-between;
  div {
    background-color: ${({ theme }) => `${theme.colors.primary}90`};
    border: solid 1px ${({ theme }) => `${theme.colors.primary}40`};
    margin: 2px 2px;
    padding: 2px 10px;
  }
  &[data-local-player="true"] {
    div {
      background-color: ${({ theme }) => `${theme.colors.success}90`};
    }
  }

`

const ScoreBoardName = styled.div`
  text-transform: capitalize;
  flex-grow: 1;

`

const ScoreBoardScore = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`

function mapSubmittedResultsToListItems ({ Name, Score, isLocalPlayer }, index) {
  return (
    <ScoreBoardListItem
      data-local-player={isLocalPlayer}
      key={index}
      >
      <ScoreBoardName>
        {Name}
      </ScoreBoardName>
      <ScoreBoardScore>
        {Score}
      </ScoreBoardScore>
    </ScoreBoardListItem>
  )
}

export default function ScoreBoard ({ playerRecord, submittedAnswers }) {
  submittedAnswers.push({
    ...playerRecord,
    isLocalPlayer: true
  })

  submittedAnswers = submittedAnswers.sort((a, b) => b.Score > a.Score)

  return (
    <Widget>
      <Widget.Header>
        Placar
      </Widget.Header>
      <Widget.Content>
        <ul>
          {submittedAnswers.map(mapSubmittedResultsToListItems)}
        </ul>
      </Widget.Content>
    </Widget>
  )
}
