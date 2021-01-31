
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
    let dbUrl = `https://${projectName}.${githubUser}.vercel.app/api/db`

    if (githubUser === 'vercel') {
      dbUrl = `https://${projectName}.vercel.app/api/db`
    }

    const fetchResponse = await fetch(dbUrl)
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
