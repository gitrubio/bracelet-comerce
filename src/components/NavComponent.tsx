import { useState } from "react";

import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavProps } from "../interfaces";
export default function NavComponent({ currency, changeCurrency , onClickCar , onClickHistory}: NavProps) {
  return (
    <>
      <Grid xs={12} sm={6} md={6} lg={8}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="search-input">Busca tu producto</InputLabel>
          <OutlinedInput
            id="search-input"
            type={"text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {}}
                  onMouseDown={() => {}}
                  edge="end"
                ></IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          spacing={4}
          direction="row"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Tooltip title="Moneda de cobro">
            <Button
              variant="outlined"
              size="large"
              sx={{ borderRadius: 4 }}
              onClick={changeCurrency}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={24}
                width={24}
              >
                {`$${currency}`}
              </Box>
            </Button>
          </Tooltip>
          <Tooltip title="Historial">
            <Button variant="outlined" size="large" sx={{ borderRadius: 4 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={24}
                width={24}
              >
                <HistoryIcon color="primary" scale={2} />
              </Box>
            </Button>
          </Tooltip>
          <Tooltip title="Carrito de compra">
            <Button onClick={onClickCar} variant="contained" size="large" sx={{ borderRadius: 4 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={24}
                width={24}
              >
                <ShoppingCartIcon color="secondary" scale={2} />
              </Box>
            </Button>
          </Tooltip>
        </Stack>
      </Grid>
    </>
  );
}
