import { CollectionReference, collection } from 'firebase/firestore'
import firedb from '.';
import { ProductProps, ProductResponse, Products, order } from '../interfaces';
export const productsCollectionRef = collection(firedb, "productos") as CollectionReference<ProductResponse>;
export const ordenesCollectionRef = collection(firedb, "ordenes") as CollectionReference<order>;