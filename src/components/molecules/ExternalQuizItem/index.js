import { motion } from 'framer-motion'
import Widget from '../Widget'
import Link from '../../atoms/Link'

export default function ExternalQuizItem ({ externalQuiz }) {
  const {
    projectName,
    githubUser,
    questionsNumber,
    backgroundImage,
    title
  } = externalQuiz
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
        >
      <Widget.Topic
        as={Link}
        href={`/quiz/${projectName}___${githubUser}`}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImage})`
        }}
            >
        {`${title}`}
        <Widget.SubTopic>
          {`by ${githubUser} / ${questionsNumber} perguntas`}
        </Widget.SubTopic>
      </Widget.Topic>

    </motion.li >
  )
}
