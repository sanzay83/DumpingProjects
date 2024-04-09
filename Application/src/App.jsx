import { useState } from 'react'
import AddItem from './Components/AddItem'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import WelcomeMessage from './Components/WelcomeMessage'
import './App.css'

function App() {

  const initialTodo = [{name: 'Apple', dueDate:'12/11/2023'}]
  const [todoItems, setTodoItems] = useState(initialTodo);
  
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <div className='s-container'>
      <AppName />
      <AddItem onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  )
}

export default App
