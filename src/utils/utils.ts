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



  export const dataExample : ProductProps[] = [
    {
        description :' Pulsera de cuerda verde con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 110,
        TypeMaterial : 'oro rosado',
        starts : 5
    },
    {
        description :'Pulsera de cuerda verde con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 2000000,
        TypeMaterial : 'oro rosado',
        starts : 5
    },
    {
        description :' Pulsera de cuerda verde con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 2000000,
        TypeMaterial : 'oro rosado',
        starts : 5
    }
  ]