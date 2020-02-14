import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import MessagesList from './MessagesList'
import '../styles/Chat.css'

const socket = io.connect('https://glacial-crag-75504.herokuapp.com/')

function Chat () {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)
  let timeout;


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

    socket.on('typing', (data) => {
      setTyping(data)
    })

  }, [])

  const handleKeyUp = (event) => {
    socket.emit('typing', true)
    clearTimeout(timeout)
    timeout = setTimeout(timeoutFunction, 2000)
  }

  const timeoutFunction = () => {
    socket.emit('typing', false)
  }

  const showAlert = typing.value && socket.id !== typing.id

  return <div className="App">
    <div className={'chat-container'}>
      <div className={'chat'}>
        <MessagesList messages={messages}/>
        <div className={'chat-actions'}>
          <div className={'alerts'}>
            {showAlert && <p>Somone is typing...</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              onKeyUp={handleKeyUp}
              onChange={handleInputChange}
              value={input}/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>

}

export default Chat
