import { useEffect, useState } from 'react';
import ProductServices from "../services"
import { ProductProps, Products } from '../interfaces';

export const useProducts = () => {
    const [products, setproducts] = useState<ProductProps[]>([])
    const [loading, setloadings] = useState<boolean>(false)
        const getAll = async () => {
            setloadings(true)
            const response =  await ProductServices.getAll()
            if(response.status === 'success') setproducts(response.data)
            setloadings(false)
        }
        useEffect(()=>{
            getAll()

        },[])

    return {
        products,
        loading
    }
}