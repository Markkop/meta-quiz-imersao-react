import { useState } from 'react'
import Input from '../../atoms/Input'
import FlexFormButton from '../../atoms/FlexFormButton'
import { useRouter } from 'next/router'
import { getUserAndProjectNamesFromUrl } from '../../../utils'
import styled from 'styled-components'

const FlexForm = styled.form`
  display: flex;
  `

export default function CustomQuizUrlForm () {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')
  const [url, setUrl] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    const { projectName, githubUser } = getUserAndProjectNamesFromUrl(url)
    if (!projectName || !githubUser) {
      setErrorMessage('Url inválida. Ela está no formato <projeto>.<autor>.vercel.app ?')
      return
    }
    setErrorMessage('')
    router.push(`/quiz/${projectName}___${githubUser}`)
  }

  return <>
    <FlexForm
      onSubmit={handleSubmit}>

      <Input
        style={{ marginBottom: 0 }}
        name="customQuizUrl"
        onChange={event => setUrl(event.target.value)}
        placeholder="Url do Quiz"
        value={url}
    />
      <FlexFormButton type="submit" disabled={!url}>
        IR
      </FlexFormButton>
    </FlexForm>
    {
      errorMessage && <p>
        {errorMessage}
      </p>
    }
  </>
}
