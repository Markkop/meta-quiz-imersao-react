import { useState } from 'react'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { useRouter } from 'next/router'

export default function QuizForm () {
  const router = useRouter()
  const [name, setName] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return <form onSubmit={handleSubmit}>
    <Input
      name="nomeDoUsuario"
      onChange={event => setName(event.target.value)}
      placeholder="Diz ai seu nome"
      value={name}
    />
    <Button type="submit" disabled={!name}>
      {`Bora lá ${name}`}
    </Button>
  </form>
}
