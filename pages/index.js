import Head from 'next/head'
import db from '../db.json'
import { repository } from '../package.json'
import { enrichExternalQuizes } from '../src/utils'
import GitHubCorner from '../src/components/atoms/GitHubCorner'
import Quiz from '../src/components/atoms/Quiz'
import QuizLogo from '../src/components/atoms/QuizLogo'
import Widget from '../src/components/molecules/Widget'
import Footer from '../src/components/molecules/Footer'
import ExternalQuizItem from '../src/components/molecules/ExternalQuizItem'
import CustomQuizUrlForm from '../src/components/molecules/CustomQuizUrlForm'
import QuizForm from '../src/components/molecules/QuizForm'

export default function HomePage ({ enrichedExternal }) {
  return (
    <Quiz.Background backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <Quiz.Container>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <QuizForm />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {enrichedExternal.map(externalQuiz =>
                <ExternalQuizItem
                  externalQuiz={externalQuiz}
                  key={externalQuiz.projectName}
                />
              )}
              <Widget.Topic>
                <CustomQuizUrlForm />
              </Widget.Topic>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </Quiz.Container>
      <GitHubCorner projectUrl={repository.url} />
    </Quiz.Background>
  )
}

export async function getServerSideProps (context) {
  const enrichedExternal = await enrichExternalQuizes()
  return {
    props: {
      enrichedExternal
    }
  }
}
