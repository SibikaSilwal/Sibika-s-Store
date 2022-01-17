import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"

import beanie from "../assets/Cable_Knit_Beanie.webp"
import gloves from "../assets/Hand_Knit_Texting_Gloves.webp"
import dinosaur from "../assets/Handmade_Dinosaur.webp"
import bookmark from "../assets/Handmade_Wooden_Bookmark.webp"
import lovebracelet from "../assets/Love_friendship_Bracelet.webp"
import wovenbracelet from "../assets/Multilayer_Hand_Woven_Bracelet.webp"
import necklace from "../assets/Unisex_Adjustable_necklace.webp"
import socks from "../assets/Women_Knitted_wool_sock.webp"


export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Cable Knit Beanie', price: 40, image: beanie, productStatus: 'hot'},
        {id: 2, name: 'Hand Knit Texting Gloves', price: 26, image: gloves,productStatus: 'new'},
        {id: 3, name: 'Handmade Dinosaur', price: 35, image: dinosaur,productStatus: 'new'},
        {id: 4, name: 'Wooden Bookmark', price: 15, image: bookmark,productStatus: 'new'},
        {id: 5, name: 'Love Friendship Bracelet', price: 22, image: lovebracelet,productStatus: 'hot'},
        {id: 6, name: 'Hand Woven Bracelet', price: 22, image: wovenbracelet,productStatus: 'new'},
        {id: 7, name: 'Unisex Adjustable Necklace', price: 24, image: necklace,productStatus: 'hot'},
        {id: 8, name: 'Knitted Wool Socks', price: 20, image: socks,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;