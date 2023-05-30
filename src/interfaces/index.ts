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

export interface DrawerProps {
    direction : "left" | "top" | "right" | "bottom" | undefined
    open : boolean
    currency? : currencyMoney
    cancel: () => void
    data: Omit<order, 'id'>[]
    onSave: (orders: order[], total: number) => Promise<void>
    onDelete: () => void
}
export interface order {
    cantidad : number
    material : Material
    dije : dije
    TypeMaterial : TypeMaterial
    total : number
    date: Date
}

export interface orderProducts {
 id?: string
 products : order[]
 date : Date 
 total : number
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
    dataCar: Omit<order, 'id'>[]
    setData: React.Dispatch<React.SetStateAction<order[]>>
}

export type status = 'success' | 'error'
export type Material = 'Cuero' | 'Cuerda'
export type dije = 'Martillo' | 'Ancla'
export type TypeMaterial =  'oro'|  'baño de oro' | 'oro rosado' |   'plata' | 'Níquel'