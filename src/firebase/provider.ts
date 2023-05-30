import { CollectionReference, collection } from 'firebase/firestore'
import firedb from '.';
import { ProductProps, Products } from '../interfaces';
export const productsCollectionRef = collection(firedb, "productos") as CollectionReference<ProductProps>;