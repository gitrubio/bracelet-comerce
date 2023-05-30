import { Drawer, Grid,   } from "@mui/material";
import React from "react";
import { DrawerProps, orderProducts } from "../interfaces";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OrderItem from "./OrderItem";

export default function HistoryDrawer({
    direction,
    cancel,
    open,
    data
  }: Omit<DrawerProps<orderProducts>,'onSave' | 'onDelete'>) {
  return (
    <Drawer anchor={direction} open={open} onClose={cancel}>
    <Grid container sx={{ width: 400, height: "100%" }}>
      <Grid item key={"list-products"}>
        <List sx={{ width: "100%", height: 600, overflowY: "auto" }}>
          {data.map((product, index) => (
            <ListItem key={product.id}>
             <OrderItem {...product}/>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  </Drawer>
  )
}
