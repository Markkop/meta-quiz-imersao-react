import Widget from '../../molecules/Widget'
import CustomQuizUrlForm from '../../molecules/CustomQuizUrlForm'
import styled from 'styled-components'

const StyledAnchor = styled.a`
    :visited,
    :link {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export default function MoreQuizesWidget () {
  return (
    <Widget>
      <Widget.Content>
        <h1>Mais quizes!</h1>
        <p>
          Confira outros projetos na {' '}
          <StyledAnchor
            href="https://aluraquiz-base.alura-challenges.vercel.app/contribuidores"
            rel="noreferrer"
            target="_blank"
            >
            Vitrine Da Imersão
          </StyledAnchor>.
          Se quiser usar um quiz de lá aqui, basta colar o link no campo abaixo ;D
        </p>
        <Widget.Topic>
          <CustomQuizUrlForm />
        </Widget.Topic>
      </Widget.Content>
    </Widget>
  )
}
