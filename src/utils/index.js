import { getRecords, createRecords, saveRecord } from './records'
import { getUserAndProjectNamesFromUrl, enrichExternalQuizes } from './external'

/**
 * Wait some time to simulate loading states
 * @param {function} callback
 * @param {number} time in miliseconds
 */
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
