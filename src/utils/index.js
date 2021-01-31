import { getRecords, createRecords, saveRecord } from './records'
import { external } from '../../db.json'

function wait (callback, time) {
  setTimeout(callback, time)
}

function getExternalQuizes () {
  return external
}

function getUserAndProjectNamesFromUrl (url) {
  const [, projectName, githubUser] = url.match(/\/\/(.*?)\.(.*?)\./)
  return { projectName, githubUser }
}

export {
  getUserAndProjectNamesFromUrl,
  getExternalQuizes,
  createRecords,
  getRecords,
  saveRecord,
  wait
}
