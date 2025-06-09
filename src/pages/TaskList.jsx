import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function TaskList() {

  const { tasks } = useContext(GlobalContext)



  return (
    <div>
      <h1>List delle Task</h1>
      <p>Qui ci sono le Task</p>
    </div>
  )
}