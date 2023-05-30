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

export interface order {
    id : string
    cantidad : number
    material : Material
    dije : dije
    TypeMaterial : TypeMaterial
    total : number
    date: Date
}

export interface ProductResponse  extends Products{
    img : string
}
export interface ModalProps {
    onSave: ( item : Omit<order, 'id'>) => void
}
export interface ProductProps {
    currency? : currencyMoney
    producto : Products
    img : string
    onSave: ( item : Omit<order, 'id'>) => void
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

export type status = 'success' | 'error'
export type Material = 'Cuero' | 'Cuerda'
export type dije = 'Martillo' | 'Ancla'
export type TypeMaterial =  'oro'|  'baño de oro' | 'oro rosado' |   'plata' | 'Níquel'