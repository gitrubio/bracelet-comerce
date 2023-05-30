import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import {Material, ModalProps, TypeMaterial, dije} from '../interfaces'
import { calculateTotal } from '../utils/utils';
export default function ModalProduct({ onSave } : ModalProps){
  const [material, setMaterial] = useState('');
  const [dije, setDije] = useState('');
  const [tipo, setTipo] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
       const totalBuy =  calculateTotal(cantidad,material,dije,tipo)
       onSave({
        cantidad : +cantidad,
        date : new Date(),
        dije : dije as dije,
        material : material as Material,
        total : totalBuy,
        TypeMaterial : tipo as TypeMaterial
       })
  };

  return (
    <form onSubmit={handleSubmit}>
    <Grid container lg={12} display={'flex'} justifyContent={'center'}>
        <Typography>Crea tu pulsera</Typography>
    </Grid>
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Material de la Manilla</InputLabel>
        <Select value={material} onChange={(e) => setMaterial(e.target.value as string)}>
          <MenuItem value="Cuero">Cuero</MenuItem>
          <MenuItem value="Cuerda">Cuerda</MenuItem>
        </Select>
      </FormControl>


      <FormControl fullWidth margin="normal" required>
        <InputLabel>Dije</InputLabel>
        <Select value={dije} onChange={(e) => setDije(e.target.value as string)}>
          <MenuItem value="Martillo">Martillo</MenuItem>
          <MenuItem value="Ancla">Ancla</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" required>
        <InputLabel>Tipo</InputLabel>
        <Select value={tipo} onChange={(e) => setTipo(e.target.value as string)}>
          <MenuItem value="Oro">Oro</MenuItem>
          <MenuItem value="Oro">Oro Rosado</MenuItem>
          <MenuItem value="Plata">Plata</MenuItem>
          <MenuItem value="Niquel">Niquel</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" required >
        <TextField label="Cantidad" type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Agregar al carrito
      </Button>
    </form>
  );
};


