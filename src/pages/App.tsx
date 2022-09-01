import { useState } from 'react';
import Timer from '../components/Timer';
import Form from '../components/Form';
import List from '../components/List';
import { Itask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selected, setselected] = useState<Itask>();

  function selectTask(selectedTask: Itask) {
    setselected(selectedTask)
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if (selected) {
      setselected(undefined);
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        task={tasks}
        selectTask={selectTask}
      />
      <Timer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;