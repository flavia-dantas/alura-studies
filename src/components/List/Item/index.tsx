import { Itask } from "../../../types/task";
import style from "../Item/Item.module.scss";

interface Props extends Itask { //Utilizando o extends podemos herdar todos os tipos de uma interface em outra interface
  selectTask: (selectTask: Itask) => void //se não retornar nada é do tipo void
}

export default function Item(
  {
    task,
    time,
    selected,
    completed,
    id,
    selectTask
  }: Props) {
  return (
    <li className={`${style.item} ${selected ? style.selectedItem : ''} 
    ${completed ? style.completedItem : ''}`}
      onClick={() => !completed && selectTask({
        task,
        time,
        selected,
        completed,
        id
      })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.completed} aria-label="tarefa completada" ></span>}
    </li>
  )
}