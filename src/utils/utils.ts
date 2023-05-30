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



  export const data : ProductProps[] = [
    {
        description :' Pulsera de cuerda verde con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 90,
        TypeMaterial : 'plata',
        starts : 3,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :'Pulsera de cuerda rosada con un Ancla tipo oro rosado',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 110,
        TypeMaterial : 'oro rosado',
        starts : 5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de cuerda negra con un Ancla tipo niquel',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 80,
        TypeMaterial : 'Níquel',
        starts : 4,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de cuerda negra con un Martillo tipo niquel',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 50,
        TypeMaterial : 'Níquel',
        starts : 2.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de cuerda roja con un Martillo tipo plata',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 70,
        TypeMaterial : 'plata',
        starts : 5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de cuerda negra con un Martillo tipo oro u Oro rosado',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 90,
        TypeMaterial : 'oro',
        starts : 4,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero negra con un Ancla tipo niquel',
        dije : 'Ancla',
        material : 'Cuero',
        price : 90,
        TypeMaterial : 'Níquel',
        starts : 5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero azul con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuero',
        price : 100,
        TypeMaterial : 'plata',
        starts : 2,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero negra con un Ancla tipo Oro u Oro rosado',
        dije : 'Ancla',
        material : 'Cuero',
        price : 120,
        TypeMaterial : 'oro rosado',
        starts : 4.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo niquel',
        dije : 'Martillo',
        material : 'Cuero',
        price : 70,
        TypeMaterial : 'Níquel',
        starts : 2.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo plata',
        dije : 'Martillo',
        material : 'Cuero',
        price : 80,
        TypeMaterial : 'plata',
        starts : 1,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo Oro u Oro Rosado',
        dije : 'Martillo',
        material : 'Cuero',
        price : 100,
        TypeMaterial : 'oro',
        starts : 1.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseraVerde.jpg?alt=media&token=83c54e36-942a-428f-a252-485e83d3a9cf'
    }
  ]