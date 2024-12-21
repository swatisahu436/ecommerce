import React, { createContext, useEffect, useState } from 'react';
import { doc,setDoc,getDoc,updateDoc,arrayUnion,arrayRemove  } from "firebase/firestore";
import { database } from "../Utils/firebase";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading,setLoading]=useState(true);

/*add to cart*/
    const addToCart = async (product) => {
        // Debug: Log the product object to verify its structure
        console.log("Product to add:", product);

        // Check if the product has an id
        if (!product || typeof product.id === 'undefined') {
            console.error('Invalid product: Missing id');
            return;
        }
        
        setCart((prevCart) => [...prevCart, product]);

        const productData = { id: product.id };

        try {
              const docRef=doc(database,"cart","phone");
                const docSnap= await getDoc(docRef);
                if(docSnap.exists()){
                    await updateDoc(docRef,{
                        productData:arrayUnion(productData.id)
                    });
                }else{
                    await setDoc(docRef,{productData:[productData.id]});
                }
                   
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

/*delete to cart*/
const removeFromCart = async (productId) => {
    setCart((prevCart) => prevCart.filter(id => id !== productId));
    
    try {
        const docRef = doc(database, "cart", "phone");
        await updateDoc(docRef, {
            productData: arrayRemove(productId)
        });
        console.log("Product removed with ID: ", productId);
    } catch (e) {
        console.error("Error removing document: ", e);
    }
};

     /*how to fetch from Data base*/
     const fetchCartData=async()=>{
        try{
            const docRef=doc(database,"cart","phone");
            const docSnap=await getDoc(docRef);
                 if(docSnap.exists()){
                    setCart(docSnap.data().productData);
                 }
                 setLoading(false);
        } catch(error){
            console.error("error fetching cart data");
        }
     };

     useEffect(()=>{
     fetchCartData();
     },[]
     ); 

    return (
        <CartContext.Provider value={{ cart, loading,addToCart,removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
