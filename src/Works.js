import React from 'react'
import styles from './Todo.module.css'
import {
  RiTodoFill,
  RiCheckboxFill,
  RiDeleteBackFill,
  RiDeleteBin2Fill,
} from 'react-icons/ri'

function Works({
  todo,
  deleteTodo,
  completedTodo,
  noCompleted,
  deleteNoCompletedTodo,
}) {
  return (
    <div>
      {todo
        .filter((el) => {
          return !el.completed
        })
        .map((el) => {
          return (
            <div
              className={`${styles.container} ${
                el.completed ? styles.chexContainer : ''
              }`}
            >
              <RiTodoFill className={styles.todoFill} />
              <h3>{el.text}</h3>
              <RiCheckboxFill
                title="Завершить задачу"
                className={`${styles.chexBox} ${
                  el.completed ? styles.complet : ''
                }`}
                onClick={() => completedTodo(el.id)}
              ></RiCheckboxFill>
              <RiDeleteBackFill
                title="Удалить задачу"
                className={styles.todoBin5}
                onClick={() => deleteTodo(el.id)}
              ></RiDeleteBackFill>
            </div>
          )
        })}
      {!!noCompleted && (
        <RiDeleteBin2Fill
          className={styles.deleteNoCompleted}
          onClick={deleteNoCompletedTodo}
          title="Удалить незавершённые задачи"
        />
      )}
    </div>
  )
}

export default Works
