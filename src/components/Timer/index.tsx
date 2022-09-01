import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { Itask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: Itask | undefined,
  finishTask: () => void
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>(); //<Number> tipando para number

  useEffect(() => {
    if (selected?.time) { // se selected existir e selected.time existir (nome "optional chaining", ou "encadeamento opcional")
      setTime(timeToSeconds(selected.time));
    }
  }, [selected])

  function regressive(counter: number = 0) { // se for undefined coloca zero
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return regressive(counter - 1)//função recursiva
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o crônometro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>

      <Button onClick={() => regressive(time)}>
        Começar
      </Button>
    </div>
  )
}