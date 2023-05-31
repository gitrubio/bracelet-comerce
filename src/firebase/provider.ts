import { CollectionReference, collection } from 'firebase/firestore'
import firedb from '.';
import { ProductProps, ProductResponse, Products, orderProducts } from '../interfaces';
export const productsCollectionRef = collection(firedb, "productos") as CollectionReference<ProductResponse>;
export const ordenesCollectionRef = collection(firedb, "ordenes") as CollectionReference<orderProducts>;