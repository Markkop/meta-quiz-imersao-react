import { getRecords, createRecords, saveRecord } from './records'

function wait (callback, time) {
  setTimeout(callback, time)
}

export {
  createRecords,
  getRecords,
  saveRecord,
  wait
}
