import { useState } from 'react';
import { SheetMovies } from "../components/SheetMovies";
import { SheetPeople } from "../components/SheetPeople";
import { Container, Stack, Modal, Typography, Box, Card, CardContent, CardActionArea, Grid } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SheetsPage = () => {

  // const Ref = useRef(null);
  // const [timer, setTimer] = useState('00');

  // const getTimeRemaining = (e) => {
  //   const total = Date.parse(e) - Date.parse(new Date());
  //   const seconds = Math.floor((total / 1000) % 60);

  //   return { total, seconds }
  // }

  // const startTimer = (e) => {
  //   let { total, seconds }
  //     = getTimeRemaining(e);
  //   if (total >= 0) {
  //     setTimer(
  //       (seconds > 9 ? seconds : '0' + seconds)
  //     )
  //   }
  // }

  // const clearTimer = (e) => {

  //   setTimer('60');
  //   if (Ref.current) clearInterval(Ref.current);
  //   const id = setInterval(() => {
  //     startTimer(e);
  //   }, 1000)
  //   Ref.current = id;
  // }

  // const getDeadTime = () => {
  //   let deadline = new Date();
  //   deadline.setSeconds(deadline.getSeconds() + 60);
  //   return deadline;
  // }

  // useEffect(() => {
  //   clearTimer(getDeadTime());
  // }, []);

  // const onClickReset = () => {
  //   clearTimer(getDeadTime());
  // }

  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);


  return (

    <Container sx={{
      marginTop: '100px'
    }}>
      <Stack direction={'row'} sx={{
        justifyContent: 'space-around',
      }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }} >
              <CardActionArea onClick={handleModal}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Click Abrir sobre
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Modal
          open={open}
          onClose={handleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SheetMovies />
            <SheetPeople />

          </Box>
        </Modal>
      </Stack>

      {/* <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button> */}

    </Container>
  )
}

export { SheetsPage }