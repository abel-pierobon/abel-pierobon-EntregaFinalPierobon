import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import data from "./seedData.json"



const productosCollection = collection (db,"productos");

data.forEach((producto) =>{
    addDoc(productosCollection, producto)
    .then((resultado) =>{
        console.log(resultado)
        console.log("producto cargado")
    })
    .catch(() =>{
        console.log("error")
    })
})



