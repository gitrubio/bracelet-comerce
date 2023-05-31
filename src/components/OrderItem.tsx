import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import caja from '../assets/caja.png'

import { orderProducts } from '../interfaces';
import { Timestamp } from 'firebase/firestore';

export default function OrderItem({ total, date, products }: orderProducts) {
 console.log(date);
 const fecha : Timestamp = date as Timestamp
  return (
    <Card sx={{ display: 'flex' , width: 350}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', width : '100%' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {` (${products.reduce((prev,next)=> prev + next.cantidad,0)}) Pulsera(s)`}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        {`${new Date(fecha.toDate()).toLocaleString()}`}
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
      image={caja}
      alt="Live from space album cover"
    />
  </Card>
  )
}
