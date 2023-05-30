import { doc, getDocs, query , setDoc} from "firebase/firestore";
import { productsCollectionRef ,ordenesCollectionRef} from "../firebase/provider"
import { ProductProps, ProductResponse, Products, ResponseFirbase, order } from "../interfaces";


const ProductServices = {

    async getAll(): Promise<ResponseFirbase<ProductResponse[]>> {
            try {
                const queryData = query<ProductResponse>(productsCollectionRef);
                const querySnapshot = await getDocs<ProductResponse>(queryData);
                const Materials: ProductResponse[] = []
    
                querySnapshot.forEach((doc) => {
                    const data: any = doc.data();
                    Materials.push({ id: doc.id, ...data })
                });
    
                return { data: Materials, status: 'success' }
            } catch (error) {
                console.log('fallo',error)
                return { data: [], status: 'error' }
            }
        }
}
export const OrderServices = {

    async sendOrder( order : Omit<order, 'id'>): Promise<ResponseFirbase<Omit<order, 'id'>>> {
            try {
                
                const response = await setDoc(doc(ordenesCollectionRef),order)
               
                return { data: order, status: 'success' }
            } catch (error) {
                console.log('fallo',error)
                return { data: {} as order, status: 'error' }
            }
        }
}

export default ProductServices
    
