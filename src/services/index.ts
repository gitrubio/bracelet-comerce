import { doc, getDocs, query , setDoc} from "firebase/firestore";
import { productsCollectionRef } from "../firebase/provider"
import { ProductProps, Products, ResponseFirbase } from "../interfaces";


const ProductServices = {

    async getAll(): Promise<ResponseFirbase<ProductProps[]>> {
            try {
                const queryData = query<ProductProps>(productsCollectionRef);
                const querySnapshot = await getDocs<ProductProps>(queryData);
                const Materials: ProductProps[] = []
    
                querySnapshot.forEach((doc) => {
                    const data: any = doc.data();
                    Materials.push({ id: doc.id, ...data })
                });
    
                return { data: Materials, status: 'success' }
            } catch (error) {
                console.log('fallo',error)
                return { data: [], status: 'error' }
            }
        },
    async sendOrder( product : Omit<ProductProps, 'img'| 'currency'>): Promise<ResponseFirbase<Omit<Products, 'id'>>> {
            try {
                
                const response = await setDoc(doc(productsCollectionRef),product)
               
                return { data: product, status: 'success' }
            } catch (error) {
                console.log('fallo',error)
                return { data: {} as Products, status: 'error' }
            }
        }
}

export default ProductServices
    
