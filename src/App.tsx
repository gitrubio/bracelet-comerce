import "./App.css";
import {  Divider, Grid  } from "@mui/material";
import NavComponent from "./components/NavComponent";
import CardProduct from "./components/CardProduct";
import { dataExample } from "./utils/utils";
import { currencyMoney } from "./interfaces";
import { useState } from 'react';


function App() {

  const [currency, setcurrency] = useState<currencyMoney>('USD')

  const change = () => {
    if(currency === 'USD') {
      setcurrency('COP')
    }else {
      setcurrency('USD')
    }
  }
  return (
    <div style={{ width: "100%", height: "100%" ,margin: 0}}>
      <Grid container spacing={2}>
        <NavComponent currency={currency} changeCurrency={change} />

        <Grid item xs={6} md={12} display={"flex"}>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
        </Grid>
        <Divider sx={{ height: 20 }} />
        <Grid item xs={6} md={12} display={"flex"}>
         <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
