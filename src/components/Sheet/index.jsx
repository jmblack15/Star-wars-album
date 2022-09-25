import { Card, CardContent, Typography, CardActionArea } from "@mui/material";


const Sheet = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nombre/Titulo{}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            fecha:{}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tipo: { }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export { Sheet };