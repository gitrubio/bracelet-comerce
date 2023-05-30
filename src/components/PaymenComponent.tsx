import { Drawer, Grid, Box, Typography } from "@mui/material";
import React from "react";
import { DrawerProps } from "../interfaces";
import ProductList from "./ProductList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
export default function PaymenComponent({
  direction,
  cancel,
  open,
  data,
  onSave
}: DrawerProps) {
  const total = data.reduce((prev,next)=> prev + next.total,0)
  return (
    <Drawer anchor={direction} open={open} onClose={cancel}>
      <Grid container sx={{ width: 400, height: "100%" }}>
        <Grid item key={"list-products"}>
          <List sx={{ width: "100%", height: 600, overflowY: "auto" }}>
            {data.map((product, index) => (
              <ListItem key={index}>
                <ProductList {...product} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item key={"data-order"} sx={{ width : '100%', display: 'flex', justifyContent : 'center' , alignItems : 'center'}}>
          <Box component={'div'} sx={{ width : '100%'}}>
            <Stack direction={'row'} display={'flex'} sx={{ marginBottom : 2, marginLeft: 2}} spacing={5}>
              <Typography component="div" variant="h5">
                Total a Pagar :
              </Typography>
              <Typography component="div" variant="h5">
                {`$ ${total}`}
              </Typography>
            </Stack>
            <Divider orientation="horizontal" variant="middle" flexItem sx={{ margin: 2}}/>
            <Button onClick={()=> {onSave(data,total)}}variant="outlined" sx={{ width : '100%'}}>Ordenar Productos</Button>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
}