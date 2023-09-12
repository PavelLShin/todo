import styles from './Todo.module.css'
import {
  RiTodoFill,
  RiCheckboxFill,
  RiDeleteBackFill,
  RiLoopLeftFill,
} from 'react-icons/ri'

function End({
  todo,
  deleteTodo,
  completedTodo,
  deleteCompletedTodo,
  completed,
}) {
  return (
    <div>
      {todo
        .filter((el) => {
          return !!el.completed
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
                title="Возвратить задачу"
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
      {!!completed && (
        <RiLoopLeftFill
          onClick={deleteCompletedTodo}
          title="Удалить выполненные задачи"
          className={styles.loopLeftRi}
        />
      )}
    </div>
  )
}

export default End
