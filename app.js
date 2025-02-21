const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (_req, res) => {
  res.send('8') // change this string to ensure a new version deployed
})

app.get('/health', (_req, res) => {
  // // eslint-disable-next-line no-constant-condition
  // if (true) throw('error...  ')
  res.send('ok')
})
