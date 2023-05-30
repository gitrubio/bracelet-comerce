import {
  Material,
  ProductProps,
  TypeMaterial,
  currencyMoney,
} from "../interfaces";

export function convertToCOP(amountUSD: number, exchangeRate = 5000) {
  const amountCOP = amountUSD * exchangeRate;
  return amountCOP;
}

export function formatPrice(price: number, currency?: currencyMoney) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: currency,
  });
  if (currency === "COP") price = convertToCOP(price);
  return formatter.format(price);
}

export const calculateTotal = (
  cantidad: number | string,
  material: string,
  dije: string,
  tipo: string
) => {
  let price = 0;
  if (material === "Cuero") {
        price = cueroPrice(dije,tipo)
        console.log('sss',price);
        
  } else {
        price = cuerdaPrice(dije,tipo)
  }
  return price * (+cantidad)
};


const cueroPrice = (dije : string, tipo: string) =>{
    if (dije === "Martillo") {
        switch (tipo) {
            case 'Oro':
                return 100
            case 'Plata':
                return 80

            case 'Niquel':
                return 70

            default:
                return 0
       }
    } else {
        switch (tipo) {
            case 'Oro':
                return 120

            case 'Plata':
                return 100

            case 'Niquel':
                return 90

            default:
                return 0

        }
    }
}

const cuerdaPrice = (dije : string, tipo: string) =>{
    if (dije === "Martillo") {
        switch (tipo) {
            case 'Oro':
                return 90
            case 'Plata':
                return 70

            case 'Niquel':
                return 50

            default:
                return 0
       }
    } else {
        switch (tipo) {
            case 'Oro':
                return 110

            case 'Plata':
                return 90

            case 'Niquel':
                return 80

            default:
                return 0

        }
    }
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
export const initialValue = {
    open : false,
    message : ''
  }