import { useEffect, useState } from 'react';
import {OrderServices} from "../services"
import { ProductProps, Products, order } from '../interfaces';

export const useOrders = () => {
    const [products, setproducts] = useState<ProductProps[]>([])
    const [loading, setloadings] = useState<boolean>(false)
        const getAll = async () => {
           /*  setloadings(true)
            const response =  await OrderServices.getAll()
            if(response.status === 'success') setproducts(response.data)
            setloadings(false) */
        }
        const sendOrders = async (orders : order[]) => {
            for (const order of orders) {
                 await OrderServices.sendOrder(order)
            }
        }
        useEffect(()=>{
            getAll()
        },[])

    return {
        products,
        loading
    }
}