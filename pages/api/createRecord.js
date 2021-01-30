import { createRecords } from '../../src/utils'

export default async function callCreateRecords (request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end()
    return
  }

  response.setHeader('Access-Control-Allow-Credentials', true)
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')

  const { body } = request
  const records = JSON.parse(body)
  console.log('Creating records', records)
  await createRecords(records)

  response.json({ success: true })
}
