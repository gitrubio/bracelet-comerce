import { useEffect, useState } from 'react';
import {OrderServices} from "../services"
import { order, orderProducts } from '../interfaces/index';

export const useOrders = () => {
    const [orders, setorders] = useState<orderProducts[]>([])
    const [loading, setloadings] = useState<boolean>(false)

        const sendOrders = async (orders : order[],total : number) => {
           const {data,} = await OrderServices.sendOrder(orders,total)
           return data
        }
        useEffect(()=>{
            const unsuscribe = OrderServices.listerOrders(setorders)
            return () => {
                if(unsuscribe) return unsuscribe()
            }
        },[])

        useEffect(()=>{
            console.log('2',orders);
            
        },[orders])
        
    return {
        orders,
        loading,
        sendOrders
    }
}