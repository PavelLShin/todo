import {
  RiDeleteBin5Fill,
  RiLoopLeftFill,
  RiDeleteBin2Fill,
} from 'react-icons/ri'
import styles from './TodoBtn.module.css'

function TodoBtn({
  cleanTodoList,
  deleteCompletedTodo,
  completed,
  noCompleted,
}) {
  return (
    <div className={styles.container}>
      <RiDeleteBin5Fill
        className={styles.deleteBin}
        onClick={cleanTodoList}
        title="Удалить все задачи"
      />
      {!!noCompleted && (
        <RiDeleteBin2Fill
          className={styles.deleteNocompletedBin}
          onClick={cleanTodoList}
          title="Удалить незавершённые задачи"
        />
      )}

      {!!completed && (
        <RiLoopLeftFill
          title="Удалить выполненные задачи"
          className={styles.completedDelete}
          onClick={deleteCompletedTodo}
        />
      )}
    </div>
  )
}

export default TodoBtn
