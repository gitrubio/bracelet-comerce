import { ProductProps, currencyMoney } from "../interfaces";

export function convertToCOP(amountUSD: number, exchangeRate = 5000) {
    const amountCOP = amountUSD * exchangeRate;
    return amountCOP;
  }
  
export function formatPrice(price: number, currency: currencyMoney) {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
    });
    if(currency === 'COP') price = convertToCOP(price)
    return formatter.format(price);
  }


  export const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };