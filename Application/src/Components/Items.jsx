import './Items.css'

function Items({todoName, todoDate, onDeleteClick}) {
  return (
    <div className="container">
      <div className="row rowContainer">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2"><button type="button" className="btn btn-danger delete-button" onClick={() => onDeleteClick(todoName)}>Delete</button></div>
      </div>
    </div>
  )
}

export default Items;
