import React from 'react'
import Head from 'next/head'
import db from '../db.json'
import { repository } from '../package.json'

import GitHubCorner from '../src/components/atoms/GitHubCorner'
import Link from '../src/components/atoms/Link'
import Quiz from '../src/components/atoms/Quiz'
import QuizLogo from '../src/components/atoms/QuizLogo'
import Widget from '../src/components/molecules/Widget'
import Footer from '../src/components/molecules/Footer'
import QuizForm from '../src/components/molecules/QuizForm'

function mapExternalQuizesToListItems (linkExterno) {
  const [, projectName, githubUser] = linkExterno.match(/\/\/(.*?)\.(.*?)\./)

  return (
    <li key={linkExterno}>
      <Widget.Topic
        as={Link}
        href={`/quiz/${projectName}___${githubUser}`}
      >
        {`${githubUser}/${projectName}`}
      </Widget.Topic>
    </li>
  )
}

export default function HomePage () {
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
              {db.external.map(mapExternalQuizesToListItems)}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </Quiz.Container>
      <GitHubCorner projectUrl={repository.url} />
    </Quiz.Background>
  )
}
