const tableEndpoint = `https://api.airtable.com/v0/${process.env.AIRTABLE_TABLE_PATH}`
const headers = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`
}

/**
 * @typedef PlayerRecord
 * @property {string} Name
 * @property {number} Score
 */

/**
 * Save the player record by requesting an internal endpoint
 * @param {PlayerRecord} playerRecord
 */
export function saveRecord (playerRecord) {
  try {
    const record = JSON.stringify([{ fields: playerRecord }])
    fetch('/api/createRecord', { method: 'POST', body: record })
  } catch (error) {
    console.log(error)
  }
}

/**
 * Get records from all players
 * @returns { Promise<PlayerRecord[]> }
 */
export async function getRecords () {
  try {
    const response = await fetch(tableEndpoint, { headers })
    const { records } = await response.json()
    return records
  } catch (error) {
    console.log(error)
  }
}

/**
 * Creates the player record by sending a POST to AirTable
 * @param { PlayerRecord } newRecords
 * @returns { Promise<PlayerRecord[]> }
 */
export async function createRecords (newRecords) {
  try {
    headers['Content-Type'] = 'application/json'
    const data = { records: newRecords }
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }

    const response = await fetch(tableEndpoint, options)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const { records } = await response.json()
    return records
  } catch (error) {
    console.log(error)
  }
}
