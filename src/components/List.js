import Todo from '../Todo'

function List({ todo, deleteTodo, completedTodo }) {
  return (
    <div>
      {todo.map((el) => {
        return (
          <Todo
            el={el}
            deleteTodo={deleteTodo}
            key={el.id}
            completedTodo={completedTodo}
          />
        )
      })}
    </div>
  )
}

export default List
