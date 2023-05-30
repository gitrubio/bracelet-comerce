import "./App.css";
import {  Divider, Grid  } from "@mui/material";
import NavComponent from "./components/NavComponent";
import CardProduct from "./components/CardProduct";
import { dataExample } from "./utils/utils";


function App() {
  return (
    <div style={{ width: "130vh", height: "100%" }}>
      <Grid container spacing={2}>
        <NavComponent />

        <Grid item xs={6} md={12} display={"flex"}>
          <CardProduct {...dataExample[0]} ></CardProduct>
          <CardProduct {...dataExample[1]} ></CardProduct>
          <CardProduct {...dataExample[2]} ></CardProduct>
        </Grid>
        <Divider sx={{ height: 20 }} />
        <Grid item xs={6} md={12} display={"flex"}>
         <CardProduct {...dataExample[0]} ></CardProduct>
          <CardProduct {...dataExample[1]} ></CardProduct>
          <CardProduct {...dataExample[2]} ></CardProduct>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
