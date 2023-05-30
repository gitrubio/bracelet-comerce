import { useEffect, useState } from 'react';
import {OrderServices} from "../services"
import { order } from '../interfaces/index';

export const useOrders = () => {
    const [orders, setorders] = useState<order[]>([])
    const [loading, setloadings] = useState<boolean>(false)
        const getAll = async () => {
           /*  setloadings(true)
            const response =  await OrderServices.getAll()
            if(response.status === 'success') setproducts(response.data)
            setloadings(false) */
        }
        const sendOrders = async (orders : order[],total : number) => {
           const {data,} = await OrderServices.sendOrder(orders,total)
           if(data) {
           
           }

           return data
        }
        useEffect(()=>{
            getAll()
        },[])

    return {
        orders,
        loading,
        sendOrders
    }
}