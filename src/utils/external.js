import { external } from '../../db.json'

/**
 * @typedef ExternalQuizIdentification
 * @property {string} projectName
 * @property {string} githubUser
 */

/**
 * Gets the project name and github user from a quiz url
 * @param {string} url
 * @returns {ExternalQuizIdentification}
 */
export function getUserAndProjectNamesFromUrl (url) {
  const [, projectName, githubUser] = url.match(/\/\/(.*?)\.(.*?)\./)
  return { projectName, githubUser }
}

/**
 * @typedef EnrichedExternalQuiz
 * @property {string} projectName
 * @property {string} githubUser
 * @property {string} title
 * @property {number} questionsNumber
 * @property {string} backgroundImage
 */

/**
 * Enrich external quiz list by getting more information from their db
 * @returns { Promise<EnrichedExternalQuiz[]> }
 */
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
