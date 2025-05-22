import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { ToDoContext } from './context/ToDoContext';

import './App.css'

// Components
import ToDoForm from './components/ToDoForm'

function App() {
  const [toDo, setToDo] = useState(0)
  // const ToDo = useContext(ToDoContext);

  return (
    <>
      <h1>ToDo App</h1>
      <ToDoContext.Provider value={toDo}>
        <ToDoForm />
      </ToDoContext.Provider>
    </>
  )
}

export default App
