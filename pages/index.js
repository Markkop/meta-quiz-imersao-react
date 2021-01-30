import React from 'react'
import Head from 'next/head'
import db from '../db.json'
import GitHubCorner from '../src/components/molecules/GitHubCorner'
import Widget from '../src/components/organisms/Widget'
import Footer from '../src/components/organisms/Footer'
import Quiz from '../src/components/organisms/Quiz'

export default function Home () {
  return (
    <Quiz.Background backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <Quiz.Container>
        <Quiz.Logo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Quiz.Form />
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </Quiz.Container>
      <GitHubCorner projectUrl="https://github.com/Markkop/meta-quiz-imersao-react" />
    </Quiz.Background>
  )
}
