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

        <Grid item xs={8} md={12} display={"flex"}>
          <CardProduct {...{...dataExample[0], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[1], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[2], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[3], currency}} ></CardProduct>
        </Grid>
        <Divider sx={{ height: 20 }} />
        <Grid item xs={8} md={12} display={"flex"}>
         <CardProduct {...{...dataExample[4], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[5], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[6], currency}} ></CardProduct>
          <CardProduct {...{...dataExample[7], currency}} ></CardProduct>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
