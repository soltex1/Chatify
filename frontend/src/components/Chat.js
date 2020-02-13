import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import MessagesList from './MessagesList'
import '../styles/Chat.css'

const socket = io.connect('https://glacial-crag-75504.herokuapp.com/')

function Chat () {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setInput('')
    socket.emit('message', input)
  }

  const handleInputChange = (event) => {
    event.persist()
    const value = event.target.value
    setInput(value)
  }

  useEffect(() => {
    socket.on('message', (message) => {
      Object.assign(message, {
        owner: message.id === socket.id
          ? 'own-message'
          : 'other-message'
      })
      setMessages((oldMessages) => [...oldMessages, message])
    })
  }, [])

  return <div className="App">
    <head>
      <title>Socket.IO chat</title>
    </head>
    <body>
    <div className={'chat-container'}>
      <div className={'chat'}>
        <MessagesList messages={messages}/>
        <div className={'chat-actions'}>
          <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} value={input}/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
    </body>
  </div>

}

export default Chat
