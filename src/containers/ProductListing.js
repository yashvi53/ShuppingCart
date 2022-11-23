import React,{useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import {setProducts} from "../redux/actions/productAction";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
    const fetchProducts= async ()=>{
       const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log("ERR",err);
       });
       dispatch(setProducts(response.data));
    };
    useEffect(() => {
    
        fetchProducts();

    }, []);
    
    console.log("products:",products);
  return(
    <div>
        <ProductComponent/>
    </div>

  );
};
export default ProductListing