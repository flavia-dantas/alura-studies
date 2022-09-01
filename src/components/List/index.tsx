
import { Itask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  task: Itask[],
  selectTask: (selectTask: Itask) => void //se não retornar nada é do tipo void
}

function List({ task, selectTask }: Props) {
  return (
    <aside className={style.ListTarefas}>

      <h2> Estudos do dia</h2>
      <ul>
        {task.map(item => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;


