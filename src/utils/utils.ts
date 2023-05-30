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
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/rocue.jpg?alt=media&token=5abad83a-5e54-465d-bf00-d34c66e1b1e5'
    },
    {
        description :' Pulsera de cuerda negra con un Ancla tipo niquel',
        dije : 'Ancla',
        material : 'Cuerda',
        price : 80,
        TypeMaterial : 'Níquel',
        starts : 4,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/cuerdanegra.webp?alt=media&token=e6622bff-92a4-481e-94c5-46aa12dfb08f'
    },
    {
        description :' Pulsera de cuerda negra con un Martillo tipo niquel',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 50,
        TypeMaterial : 'Níquel',
        starts : 2.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/71MAQcEM19L.jpg?alt=media&token=37df089d-82b8-469a-9a1e-42ead681701c'
    },
    {
        description :' Pulsera de cuerda roja con un Martillo tipo plata',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 70,
        TypeMaterial : 'plata',
        starts : 5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/61Ievo%2BbOwL._AC_UF894%2C1000_QL80_.jpg?alt=media&token=6dc33bc2-3c01-486f-a376-39c0886fa515'
    },
    {
        description :' Pulsera de cuerda negra con un Martillo tipo oro u Oro rosado',
        dije : 'Martillo',
        material : 'Cuerda',
        price : 90,
        TypeMaterial : 'oro',
        starts : 4,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/51vFdfxcJGL._AC_UF1000%2C1000_QL80_.jpg?alt=media&token=344cbf4f-e31d-4ae4-ba83-9e40239cf9de'
    },
    {
        description :' Pulsera de Cuero negra con un Ancla tipo niquel',
        dije : 'Ancla',
        material : 'Cuero',
        price : 90,
        TypeMaterial : 'Níquel',
        starts : 5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/Pulsera-de-hombre-con-ancla-hecha-de-cuero-negra-y-negra.jpg_Q90.jpg_.webp?alt=media&token=92c8277f-e106-4c7d-a8e1-bcbb69941b4b'
    },
    {
        description :' Pulsera de Cuero azul con un Ancla tipo plata',
        dije : 'Ancla',
        material : 'Cuero',
        price : 100,
        TypeMaterial : 'plata',
        starts : 2,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/platanegracuero.jpg?alt=media&token=313e62ad-cb60-4f2f-afbf-0124efcac840'
    },
    {
        description :' Pulsera de Cuero negra con un Ancla tipo Oro u Oro rosado',
        dije : 'Ancla',
        material : 'Cuero',
        price : 120,
        TypeMaterial : 'oro rosado',
        starts : 4.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/41uL5snrasL._AC_UF894%2C1000_QL80_.jpg?alt=media&token=4a4c0fd8-75bb-4bdc-b10e-bb7e3214eb7a'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo niquel',
        dije : 'Martillo',
        material : 'Cuero',
        price : 70,
        TypeMaterial : 'Níquel',
        starts : 2.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulsera-martillo-de-thor-acero-inox-con-cuero-trenzado-ref-LBC33P.jpg?alt=media&token=04605b4c-4a68-4380-93e4-9328ae1d79e6'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo plata',
        dije : 'Martillo',
        material : 'Cuero',
        price : 80,
        TypeMaterial : 'plata',
        starts : 1,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/pulseras-de-hombre-cuero-con-original-diseno-de-martillo-de-thor.jpg?alt=media&token=41412784-b9fa-4ce7-9b27-f4433fca24e4'
    },
    {
        description :' Pulsera de Cuero negra con un Martillo tipo Oro u Oro Rosado',
        dije : 'Martillo',
        material : 'Cuero',
        price : 100,
        TypeMaterial : 'oro',
        starts : 1.5,
        img : 'https://firebasestorage.googleapis.com/v0/b/e-comerce-f3c71.appspot.com/o/rBVaWV1ISBCAGl7mAAqSE-gKfHA414.jpg?alt=media&token=b213deca-3d07-4c85-83d6-388070bb0528'
    }
  ]