// Package Imports
const app = require('express')

// Server Setup
const server = app()
const PORT = 2006
const HOSTNAME ='0.0.0.0'
server.listen(2006,'0.0.0.0', () => {
  console.log (Server is running in ${HOSTNAME}:${PORT})
})
