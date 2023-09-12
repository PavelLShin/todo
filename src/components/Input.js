import React, { useState } from 'react'
import { RiAddBoxFill } from 'react-icons/ri'
import styles from './Input.module.css'

function Input({ addTodo }) {
  const [text, setText] = useState('')
  const submitHeandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.container}>
      <form onSubmit={submitHeandler}>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          placeholder="Введите новую задачу"
        ></input>
        <button
          type="submit"
          title="Добавить новую задачу"
          className={styles.button}
        >
          <RiAddBoxFill className={styles.btn} />
        </button>
      </form>
    </div>
  )
}

export default Input
