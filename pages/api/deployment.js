import deploymentBadgeHandler from 'deployment-badge'
import { repository } from '../../package.json'

const handler = async (req, res) => {
  const userAndProjectUrl = repository.url.replace('https://github.com/', '')
  const deploymentsUrl = `https://api.github.com/repos/${userAndProjectUrl}/deployments`
  await deploymentBadgeHandler(req, res, { deploymentsUrl, namedLogo: 'vercel' })
}

export default handler
