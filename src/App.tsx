import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Box,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Toolbar,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavComponent from "./components/NavComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "130vh", height: "100%" }}>
      <Grid container spacing={2}>
        <NavComponent />

        <Grid item xs={6} md={12} style={{ background : 'red'}}>
          asd
        </Grid>
   
      </Grid>
    </div>
  );
}

export default App;
