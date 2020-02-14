import React, { useEffect, useRef } from 'react'
import Message from './Message'
import '../styles/MessagesList.css'

const MessagesList = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  useEffect(scrollToBottom, [messages])

  return <div className={'messagesList-container'}>
    <ul className={'messagesList'}>
      {messages.map((message, index) => <Message key={index} message={message}/>)}
      <div ref={messagesEndRef}/>
    </ul>
  </div>
}

export default MessagesList
