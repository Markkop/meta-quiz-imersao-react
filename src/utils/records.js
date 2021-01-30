const tableEndpoint = `https://api.airtable.com/v0/${process.env.AIRTABLE_TABLE_PATH}`
const headers = {
  Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`
}

export function saveRecord (playerRecord) {
  try {
    const record = JSON.stringify([{ fields: playerRecord }])
    fetch('/api/createRecord', { method: 'POST', body: record })
  } catch (error) {
    console.log(error)
  }
}

export async function getRecords () {
  try {
    const response = await fetch(tableEndpoint, { headers })
    const { records } = await response.json()
    return records
  } catch (error) {
    console.log(error)
  }
}

export async function createRecords (newRecords) {
  try {
    headers['Content-Type'] = 'application/json'
    const data = { records: newRecords }
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }

    console.log('Fetching POST with', options)
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
