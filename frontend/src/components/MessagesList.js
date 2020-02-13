import React, { useEffect, useRef } from 'react'
import Message from './Message'
import '../styles/MessagesList.css'

const MessagesList = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <ul className={'messagesList'}>
      {messages.map((message) => <Message message={message} />)}
      <div ref={messagesEndRef} />
    </ul>
  )
}

export default MessagesList
