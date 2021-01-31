
import { ThemeProvider } from 'styled-components'
import QuizPage from '../../src/components/templates/QuizPage'

export default function QuizDaGaleraPage ({ db }) {
  if (!db) {
    return <h1 style={{ color: 'black' }} >
      Ops, parece que esse projeto não exportou o seu quiz :(
    </h1>
  }

  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage db={db} />
    </ThemeProvider>
  )
}

export async function getServerSideProps (context) {
  try {
    const [projectName, githubUser] = context.query.id.split('___')

    const fetchResponse = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    const db = await fetchResponse.json()

    return {
      props: {
        db
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {}
    }
  }
}
