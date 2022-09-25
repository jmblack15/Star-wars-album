import { useState, useRef, useEffect } from 'react'
import { Sheet } from "../components/Sheet";
import { Container, Stack } from "@mui/material";


const SheetsPage = () => {

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);

    return { total, seconds }
  }

  const startTimer = (e) => {
    let { total, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {

    setTimer('60');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  }


  return (
    <Container sx={{
      marginTop: '100px'
    }}>
      <Stack direction={'row'} sx={{
        justifyContent: 'space-around',
      }}>
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
      </Stack>

      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>

    </Container>
  )
}

export { SheetsPage }