import './App.css'
import Input from './components/Input'
import List from './components/List'
import styles from './Main.module.css'
import TodoBtn from './TodoBtn'

function Main({
  noCompleted,
  completed,
  todo,
  setTodo,
  addTodo,
  deleteTodo,
  completedTodo,
  deleteCompletedTodo,
}) {
  const cleanTodoList = () => {
    setTodo([])
  }

  return (
    <div className={styles.container}>
      <Input addTodo={addTodo} />
      <List
        todo={todo}
        deleteTodo={deleteTodo}
        completedTodo={completedTodo}
        completed={completed}
      />

      {!!todo.length && (
        <>
          <hr></hr>
          <TodoBtn
            noCompleted={noCompleted}
            completed={completed}
            cleanTodoList={cleanTodoList}
            deleteCompletedTodo={deleteCompletedTodo}
          />

          <br></br>
        </>
      )}
    </div>
  )
}

export default Main
