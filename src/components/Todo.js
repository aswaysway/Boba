import React from "react";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Todo({ 
    todo,
    // toggleComplete,
    handleDelete,
}) {
  const [newWinner, setNewWinner] = React.useState(todo.winner);

  return (
    <div className="todo">
      <div class="date">
        { todo.selectedDate }
      </div>
      <div class="content" type="text"> {/* style={{ textDecoration: todo.completed && "line-through" }}  */}
        { todo.loser }
        &nbsp;<span>owe</span>&nbsp;
        { todo.winner === "" ? newWinner : todo.winner }
        &nbsp;
        <span>{ todo.quan }</span>
        <br /><span className="note">NOTE: </span><span className="todonote">{ todo.note }</span>
      </div>
      <div class="btn">
        {/* <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button> */}
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}