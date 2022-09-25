import { Card, CardContent, Typography, CardActionArea } from "@mui/material";


const SheetPeople = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre:{ }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genero: { }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fecha de nacimiento: { }
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tipo: { }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export { SheetPeople };