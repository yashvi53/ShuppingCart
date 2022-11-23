import React,{useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/actions/productAction";

const ProductDetail = () => {
    const product = useSelector((state)=>state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("ERR",err);
        })
        dispatch(selectProduct(response));
    }
    useEffect(() => {
      if(productId && productId !== "") fetchProductDetail();
    
    }, [productId])
    
  return(
    <div>
          <h1>productdetail</h1>
    </div>

  );
};
export default ProductDetail