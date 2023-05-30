export type currencyMoney = 'COP' | 'USD'

export interface Products {
    id : string
    description : string
    price : number
    starts : number
    material : Material
    dije : dije
    TypeMaterial : TypeMaterial
}
export interface ProductProps extends Omit<Products, 'id'> {
    currency? : currencyMoney
    img : string
}

export interface ResponseFirbase <T>{
    data : T
    status : status
}
export interface NavProps {
    currency : currencyMoney
    changeCurrency: () => void
    onClickHistory: () => void
    onClickCar: () => void
}

type status = 'success' | 'error'
type Material = 'Cuero' | 'Cuerda'
type dije = 'Martillo' | 'Ancla'
type TypeMaterial =  'oro'|  'baño de oro' | 'oro rosado' |   'plata' | 'Níquel'