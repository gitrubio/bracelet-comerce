export type currencyMoney = 'COP' | 'USD'

export interface Products {
    description : string
    price : number
    starts : number
    material : Material
    dije : dije
    TypeMaterial : TypeMaterial
}
export interface ProductProps extends Products {
    currency? : currencyMoney
    img : string
}

export interface NavProps {
    currency : currencyMoney
    changeCurrency: () => void
}

type Material = 'Cuero' | 'Cuerda'
type dije = 'Martillo' | 'Ancla'
type TypeMaterial =  'oro'|  'baño de oro' | 'oro rosado' |   'plata' | 'Níquel'