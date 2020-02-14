const app = require('express')()
const server = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(server)
const port = process.env.PORT || 3333
const getHour = require('./utils/Date')

io.on('connection', function (socket) {

  io.emit('message', {
    id: socket.id,
    type: 'event',
    description: `user ${socket.id} connected...`,
    timestamp: getHour()
  })

  socket.on('disconnect', function () {
    //console.log('user disconnected')
    io.emit('message', {
      id: socket.id,
      type: 'event',
      description: `user ${socket.id} disconnected...`,
      timestamp: getHour()
    })

  })

  socket.on('message', function (message) {
    //console.log('message received', message)

    io.emit('message', {
      id: socket.id,
      type: 'message',
      description: message,
      timestamp: getHour()
    })

  })

  socket.on('typing', function (value) {
    io.emit('typing', {
      value,
      id: socket.id
    })
  })

})

server.listen(port, () => console.log(`Chat app listening on port ${port}!`))

// Serve the static files from the React app
app.use(require('express').static(path.join(__dirname, 'client/build')))

// Handles any requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
