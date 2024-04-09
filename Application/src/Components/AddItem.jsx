import { useState } from "react"

function AddItem({onNewItem}) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate)
    setDueDate('');
    setTodoName('');
  }

  return (
      <div className="container text-center">
        <div className="row">
          <div className="col-6"><input type='text' placeholder='Enter Todo Here' value={todoName} onChange={handleNameChange}></input>
          </div>
        <div className="col-4">
          <input type='date' width='100%' onChange={handleDateChange} value={dueDate}></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success add-button" onClick={handleAddButtonClicked}>Add</button>
          </div> 
        </div>  
    </div>
  )
}

export default AddItem
