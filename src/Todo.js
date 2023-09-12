import styles from './Todo.module.css'
import { RiTodoFill, RiCheckboxFill, RiDeleteBackFill } from 'react-icons/ri'

function Todo({ el, deleteTodo, completedTodo }) {
  return (
    <div
      className={`${styles.container} ${
        el.completed ? styles.chexContainer : ''
      }`}
    >
      <RiTodoFill className={styles.todoFill} />
      <h3>{el.text}</h3>
      <RiCheckboxFill
        title={`${el.completed ? 'Возвратить задачу' : 'Завершить задачу'}`}
        className={`${styles.chexBox} ${el.completed ? styles.complet : ''}`}
        onClick={() => completedTodo(el.id)}
      ></RiCheckboxFill>
      <RiDeleteBackFill
        title="Удалить задачу"
        className={styles.todoBin5}
        onClick={() => deleteTodo(el.id)}
      ></RiDeleteBackFill>
    </div>
  )
}

export default Todo
