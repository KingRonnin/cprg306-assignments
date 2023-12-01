"use client"

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const firestore = getFirestore();
    let items = [];

    const query = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(query);
    querySnapshot.forEach( doc => {
        items.push({id: doc.id, data: doc.data()});
    });

    return items;
}

async function AddItem(userId,item) {
    const firestore = getFirestore();

    const query = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(query, item);

    return querySnapshot.id;

}

export default {getItems,AddItem};