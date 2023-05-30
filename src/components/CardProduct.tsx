import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { formatPrice } from '../utils/utils';
import { ProductProps } from '../interfaces';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
export default function CardProduct({ description, price, img,starts, currency} : ProductProps) {
  return (
    <Card sx={{ width: 250 , margin : 2}}>
    <CardActionArea>
    <CardHeader
      title={formatPrice(price, currency || 'USD')}
      action={
        <IconButton aria-label="share">
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
       {description}
      </Typography>
    </CardContent>
    <CardActions >
      <Stack direction={'row'} display={'flex'} justifyContent={'space-between'}>
      <Rating name="half-rating" defaultValue={starts} precision={0.5} />
      </Stack>
    </CardActions>
    </CardActionArea>
  </Card>
  )
}
