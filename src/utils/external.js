import { external } from '../../db.json'

export function getUserAndProjectNamesFromUrl (url) {
  const [, projectName, githubUser] = url.match(/\/\/(.*?)\.(.*?)\./)
  return { projectName, githubUser }
}

export async function enrichExternalQuizes () {
  const urls = external
  const enrichedExternal = []

  for (let index = 0; index < urls.length; index++) {
    const url = urls[index]
    const { projectName, githubUser } = getUserAndProjectNamesFromUrl(url)
    try {
      const fetchResponse = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      const { questions, bg, title } = await fetchResponse.json()
      enrichedExternal.push({
        projectName,
        githubUser,
        title,
        questionsNumber: questions.length,
        backgroundImage: bg
      })
    } catch (error) {
      console.log(error)
    }
  }

  return enrichedExternal
}
