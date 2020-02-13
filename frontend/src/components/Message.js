import React from 'react'
import '../styles/Message.css'

function Message ({ message }) {

  const { owner, description, timestamp } = message

  return <div className={`${owner}-container`}>
    <li className={owner}>
      <div>
        {description}
        <div className={'message-hour'}>{timestamp}</div>
      </div>
    </li>
  </div>
}

export default Message
