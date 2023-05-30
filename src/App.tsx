import "./App.css";
import {
  Box,
  Tooltip,
  Grid,
  Modal,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import NavComponent from "./components/NavComponent";
import CardProduct from "./components/CardProduct";
import { currencyMoney, order } from "./interfaces";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useProducts } from "./hooks/useProducts";
import Loader from "./components/Loader";
import { initialValue, style } from "./utils/utils";
import ModalProduct from "./components/ModalProduct";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [dataCart, setDataCart] = useState<order[]>([]);
  const [currency, setcurrency] = useState<currencyMoney>("USD");
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(initialValue);
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

  const saveOrder = (order: order) => {
    let exist = false;
    const newData = dataCart.map((data) => {
      if (
        data.material === order.material &&
        data.dije === order.dije &&
        data.TypeMaterial === order.TypeMaterial
      ) {
        data.cantidad += order.cantidad;
        data.total += order.total;
        exist = true;
      }
      return data;
    });
    setDataCart(exist ? newData : [...newData, order]);
    handleClose();
    setNotify({open : true, message : 'producto agregado'})
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=>setNotify(initialValue)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div style={{ width: "100%", height: "100%", margin: 0 }}>
      <Snackbar
        open={notify.open}
        autoHideDuration={1000}
        onClose={()=>setNotify(initialValue)}
        message={notify.message}
        action={action}
      />
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalProduct onSave={saveOrder} />
        </Box>
      </Modal>
      {!loading ? (
        <Grid container spacing={2}>
          <NavComponent
            currency={currency}
            changeCurrency={change}
            dataCar={dataCart}
            setData={setDataCart}
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
              <CardProduct
                producto={item}
                img={item.img}
                currency={currency}
                onSave={saveOrder}
              ></CardProduct>
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
