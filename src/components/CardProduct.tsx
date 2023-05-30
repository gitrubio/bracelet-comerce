import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import pulsera from '../assets/pulseraVerde.jpg'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { formatPrice } from '../utils/utils';
import { ProductProps } from '../interfaces';

export default function CardProduct({ description, price, TypeMaterial ,dije, material ,starts, currency} : ProductProps) {
  return (
    <Card sx={{ width: 280 , margin : 2}}>
    <CardHeader
      title={formatPrice(price, currency || 'USD')}
      action={
        <IconButton aria-label="settings">
          <FavoriteIcon />
        </IconButton>
      }
     
    />
    <CardMedia
      component="img"
      height="194"
      image={pulsera}
      alt="Pulsera"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Rating name="half-rating" defaultValue={starts} precision={0.5} />
    </CardActions>
  </Card>
  )
}
