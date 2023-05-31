import { Drawer, Grid, Box, Typography } from "@mui/material";
import { DrawerProps, order } from "../interfaces";
import ProductItem from "./ProductItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { formatPrice } from "../utils/utils";
export default function PaymenComponent({
  direction,
  cancel,
  open,
  data,
  onSave,
  onDelete,
  currency,
  loading
}: DrawerProps<order>) {
  const total = data.reduce((prev,next)=> prev + next.total,0)
  return (
    <Drawer anchor={direction} open={open} onClose={cancel}>
      <Grid container sx={{ width: 400, height: "100%" }}>
        <Grid item key={"list-products"}>
          <List sx={{ width: "100%", height: 600, overflowY: "auto" }}>
            {data.map((product, index) => (
              <ListItem key={index}>
                <ProductItem {...product}  />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item key={"data-order"} sx={{ width : '100%', display: 'flex', justifyContent : 'center' , alignItems : 'center'}}>
          <Box component={'div'} sx={{ width : '100%'}}>
            <Stack direction={'row'} display={'flex'} sx={{ marginBottom : 2, marginLeft: 2}} spacing={5}>
              <Typography component="div" variant="h6">
                Total a Pagar :
              </Typography>
              <Typography component="div" variant="h6">
                {`${formatPrice(total,currency)} ${currency}`}
              </Typography>
            </Stack>
            <Divider orientation="horizontal" variant="middle" flexItem sx={{ margin: 2}}/>
              <Stack direction={'column'} spacing={2}>
              <Button  disabled={data.length === 0 || loading} onClick={()=> {onSave(data,total)}}variant="outlined" sx={{ width : '100%'}}>Ordenar Productos</Button>
            <Button disabled={loading} onClick={onDelete}variant="outlined" color="error" sx={{ width : '100%'}}>Limpiar Carrito</Button>
              </Stack>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
}
