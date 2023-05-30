import { useState } from "react";

import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavProps } from "../interfaces";
export default function NavComponent({currency, changeCurrency} : NavProps) {
  return (
    <>
      <Grid item xs={6} md={8}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="search-input">Search</InputLabel>
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
        xs={6}
        md={4}
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
          <Button variant="outlined" size="large" sx={{ borderRadius: 4 }} onClick={changeCurrency}>
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
          <Button variant="outlined" size="large" sx={{ borderRadius: 4 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={24}
              width={24}
            >
              <AccountCircleIcon color="primary" scale={2} />
            </Box>
          </Button>
          <Button variant="contained" size="large" sx={{ borderRadius: 4 }}>
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
        </Stack>
      </Grid>
    </>
  );
}
