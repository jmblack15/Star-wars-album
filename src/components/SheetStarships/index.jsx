import { Card, CardContent, Typography, CardActionArea } from "@mui/material";


const SheetStarships = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre:{ }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            modelo: { }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            manufactura: { }
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tipo: { }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export { SheetStarships };