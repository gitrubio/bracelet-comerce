import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material'
import { formatPrice } from '../utils/utils';
import { ProductProps } from '../interfaces';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export default function CardProduct({ producto, img, currency, onSave} : ProductProps) {
  return (
    <Card sx={{ width: 250 , margin : 2}}>
    <CardActionArea>
    <CardHeader
      title={formatPrice(producto.price, currency || 'USD')}
      action={
        <IconButton aria-label="share" 
        onClick={()=> onSave(
            {cantidad : 1,
            date : new Date(),
            dije :producto.dije,
            material : producto.material,
            total : producto.price,
            TypeMaterial : producto.TypeMaterial, 
        })}>
        <AddIcon />
      </IconButton>
      }
     
    />
    <CardMedia
      component="img"
      height="194"
      image={img}
      alt="Pulsera"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {producto.description}
      </Typography>
    </CardContent>
    <CardActions >
      <Stack direction={'row'} display={'flex'} justifyContent={'space-between'}>
      <Rating name="half-rating" defaultValue={producto.starts} precision={0.5} />
      </Stack>
    </CardActions>
    </CardActionArea>
  </Card>
  )
}
