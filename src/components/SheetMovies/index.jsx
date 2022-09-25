import { Card, CardContent, Typography, CardActionArea } from "@mui/material";


const SheetMovies = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Titulo:{ }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Episodio: { }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Director: { }
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tipo: { }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export { SheetMovies };