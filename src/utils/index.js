import { getRecords, createRecords, saveRecord } from './records'
import { getUserAndProjectNamesFromUrl, enrichExternalQuizes } from './external'

function wait (callback, time) {
  setTimeout(callback, time)
}

export {
  getUserAndProjectNamesFromUrl,
  enrichExternalQuizes,
  createRecords,
  getRecords,
  saveRecord,
  wait
}
