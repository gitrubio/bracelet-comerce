import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import pulsera from '../assets/pul.png'

import { order } from '../interfaces';

export default function ProductList({ total, TypeMaterial, cantidad, dije, material}: Omit<order, 'id'>) {
  return (
    <Card sx={{ display: 'flex' , width: 350}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', width : '100%' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {`Pulsera de ${material} x ${cantidad}`}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        {`${dije} de ${TypeMaterial}`}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {`$ ${total}`}
        </Typography>
      </Box> 
    </Box>
    <CardMedia
      style={{ backgroundColor : '#FFFF'}}
      component="img"
      sx={{ width: 171 }}
      image={pulsera}
      alt="Live from space album cover"
    />
  </Card>
  )
}
