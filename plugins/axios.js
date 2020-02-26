import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `https://directus.leonwolf.xyz/`
}

export default axios.create(options)