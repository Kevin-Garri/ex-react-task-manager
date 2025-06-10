import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useContext(GlobalContext);
  const task = tasks.find(t => t.id === parseInt(id));
  if (!task)
    return (
      <h2>Task non trovata</h2>
    )
}

const handleDelete = () => {
  console.log("Elimino task:", task.id);

}

return (
  <div>
    <h1>Dettaglio Task</h1>
    <p><strong>Nome:</strong> {task.title}</p>
    <p><strong>Descrizione:</strong> {task.description}</p>
    <p><strong>Stato:</strong> {Task.status}</p>
    <p><strong>Data di Creazione:</strong>{new Date(task.createdAt).toLocaleDateString}</p>
    <button onClick={handleDelete}>Elimina Task</button>
  </div>
)