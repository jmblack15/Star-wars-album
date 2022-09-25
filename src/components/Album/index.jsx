import { Container, Grid } from "@mui/material"

import { SheetPeople } from '../SheetPeople';
import { SheetMovies } from '../SheetMovies';
import { SheetStarships } from '../SheetStarships';


const Album = () => {



  return (
    <Container fixed>
      <Container>
        <h2>Películas</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <SheetMovies />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <h2>Personajes</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(82)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <SheetPeople />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <h2>Naves</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(36)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <SheetStarships />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export { Album }