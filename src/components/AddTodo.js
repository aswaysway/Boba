import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [selectedDate, setSelectedDate] = React.useState("");
  const [winner, setWinner] = React.useState("");
  const [loser, setLoser] = React.useState("");
  const [quan, setQuan] = React.useState("");
  const [note, setNote] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (winner !== "") {
      await addDoc(collection(db, "todos"), {
        selectedDate,
        winner,
        loser,
        quan,
        note,
        completed: false
      });
      setSelectedDate("");
      setWinner("");
      setLoser("");
      setQuan("");
      setNote("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="date"
          DateFormat="mm/dd/yyyy"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Enter winner"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Enter loser"
          value={loser}
          onChange={(e) => setLoser(e.target.value)}
        />
        <input
          type="number"
          placeholder=" Enter quantity"
          value={quan}
          onChange={(e) => setQuan(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Note (Optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}