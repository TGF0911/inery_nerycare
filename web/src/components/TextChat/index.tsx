import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import io from 'socket.io-client';
import {uuid} from 'uuidv4'


import './styles.css'


const myId = uuid()
const socket = io('http://localhost:3000')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

const TextChat: React.FC = () => {

  const [message, updateMessage] = useState('')
  const [messages, updateMessages] = useState<string[]>([])


  useEffect(() => {
    const handleNewMessage = (newMessage : string) => {
        updateMessages([...messages, newMessage])

    }
  })


  const handleFormSubmit = (e : FormEvent) => {
    e.preventDefault()

    if(message.trim()){
      updateMessages([...messages, message])
      updateMessage('')
    }

  }

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    updateMessage(e.target.value)
  }

  return (

    <div className="text">
      <main className="container-chat">
        <ul className="list">
          {messages.map((messages , index) => (

          <li 
          className={`list__item list__item--${messages === messages ? `mine` : `other`}`}
          key = {index}
          >
            <span 
            
            className={`message message--${messages === '3' ? `mine` : `other`}`}
            key={messages}
            >
              {messages}
            </span>
          </li>
          ) )}
        </ul>
        <form className="form" onSubmit={handleFormSubmit}>
          <input 
          className="form__field"
          type="text"
          placeholder="Escreva sua mensagem aqui"
          onChange = {handleInputChange}
          value = {message}
          />
        </form>
      </main>
    </div>
  )
}

export default TextChat;