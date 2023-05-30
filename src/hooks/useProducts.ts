import { useEffect, useState } from 'react';
import ProductServices from "../services"
import {ProductResponse } from '../interfaces';

export const useProducts = () => {
    const [products, setproducts] = useState<ProductResponse[]>([])
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