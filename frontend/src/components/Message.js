import React from 'react'
import '../styles/Message.css'

function Message ({ message }) {

  const { owner, description, type, timestamp } = message

  return <div className={`${type === 'event' ? type : owner}-container`}>
    <li className={type === 'event' ? type : owner}>
      <div>
        {description}
        {timestamp && <div className={'message-hour'}>{timestamp}</div>}
      </div>
    </li>
  </div>
}

export default Message
