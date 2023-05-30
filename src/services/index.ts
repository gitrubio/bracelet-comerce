import { doc, getDocs, query , setDoc} from "firebase/firestore";
import { productsCollectionRef ,ordenesCollectionRef} from "../firebase/provider"
import { ProductProps, ProductResponse, Products, ResponseFirbase, order, orderProducts } from "../interfaces";


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

    async sendOrder( order : order[], total: number): Promise<ResponseFirbase<boolean>> {
            try {
                await setDoc(doc(ordenesCollectionRef),{
                    products : order,
                    date : new Date(),
                    total : total
                })
               
                return { data: true, status: 'success' }
            } catch (error) {
                console.log('fallo',error)
                return { data: false , status: 'error' }
            }
        }
}

export default ProductServices
    
