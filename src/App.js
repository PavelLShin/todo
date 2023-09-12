import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Main from './Main'
import LainOuts from './LainOuts'
import Works from './Works'
import End from './End'

function App() {
  const [todo, setTodo] = useState([])
  const addTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
      id: uuidv4(),
    }
    setTodo([...todo, newTodo])
  }

  const deleteTodo = (index) => {
    setTodo(todo.filter((el) => el.id !== index))
  }

  const completedTodo = (index) => {
    setTodo(
      todo.map((el) => {
        return el.id === index ? { ...el, completed: !el.completed } : { ...el }
      })
    )
  }

  const deleteCompletedTodo = () => {
    setTodo(todo.filter((el) => !el.completed))
  }

  const deleteNoCompletedTodo = () => {
    setTodo(todo.filter((el) => el.completed))
  }

  let complet = todo.filter((el) => {
    return !!el.completed
  })
  let completed = complet.length

  let noComplet = todo.filter((el) => {
    return !el.completed
  })

  let noCompleted = noComplet.length

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LainOuts />}>
            <Route
              index={true}
              element={
                <Main
                  noCompleted={noCompleted}
                  completed={completed}
                  todo={todo}
                  setTodo={setTodo}
                  addTodo={addTodo}
                  deleteTodo={deleteTodo}
                  completedTodo={completedTodo}
                  deleteCompletedTodo={deleteCompletedTodo}
                />
              }
            ></Route>
            <Route
              path="end"
              element={
                <End
                  deleteCompletedTodo={deleteCompletedTodo}
                  completed={completed}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completedTodo={completedTodo}
                />
              }
            >
              {' '}
            </Route>
            <Route
              path="works"
              element={
                <Works
                  deleteNoCompletedTodo={deleteNoCompletedTodo}
                  noCompleted={noCompleted}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completedTodo={completedTodo}
                />
              }
            >
              {' '}
            </Route>
          </Route>
        </Routes>
        <h1>@nihslevap</h1>
      </div>
    </BrowserRouter>
  )
}

export default App
