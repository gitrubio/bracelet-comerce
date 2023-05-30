import { useState } from "react";
import "./App.css";
import {
  Card,
  Divider,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Toolbar,
} from "@mui/material";
import NavComponent from "./components/NavComponent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Rating from "@mui/material/Rating";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "130vh", height: "100%" }}>
      <Grid container spacing={2}>
        <NavComponent />

        <Grid item xs={6} md={12} style={{ background: "red" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <FavoriteIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen 2peas along
                with the mussels, if you like.s
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Rating name="half-rating" defaultValue={5} precision={0.5} />
            </CardActions>
          </Card>
        </Grid>
        <Divider />
        <Grid item xs={6} md={12} style={{ background: "red" }}>
          asd
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
