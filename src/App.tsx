import "./App.css";
import { Box, Tooltip, Grid, Modal, Button, Skeleton } from "@mui/material";
import NavComponent from "./components/NavComponent";
import CardProduct from "./components/CardProduct";
import { Products, currencyMoney } from "./interfaces";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useProducts } from "./hooks/useProducts";
import Loader from "./components/Loader";

function App() {
  const [dataCart, setDataCart] = useState<Products[]>([]);
  const [currency, setcurrency] = useState<currencyMoney>("USD");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { products, loading } = useProducts();
  const change = () => {
    if (currency === "USD") {
      setcurrency("COP");
    } else {
      setcurrency("USD");
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", margin: 0 }}>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <></>
      </Modal>
      {!loading ? (
        <Grid container spacing={2}>
          <NavComponent
            currency={currency}
            changeCurrency={change}
            onClickCar={handleOpen}
            onClickHistory={() => {}}
          />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Tooltip title="Crea tu Pulsera">
              <Button
                onClick={handleOpen}
                variant="outlined"
                size="large"
                sx={{ borderRadius: 4, width: "100%" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={24}
                  width={24}
                >
                  <AddIcon color="primary" scale={2} />
                </Box>
              </Button>
            </Tooltip>
          </Grid>
          {products?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CardProduct {...{ ...item, currency }}></CardProduct>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
