export type currencyMoney = 'COP' | 'USD'

export interface ProductProps {
    description : string
    price : number
    starts : number
    material : Material
    dije : dije
    TypeMaterial : TypeMaterial
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