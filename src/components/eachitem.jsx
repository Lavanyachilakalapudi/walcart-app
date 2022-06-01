import React, { useEffect } from "react";
import { useSelector,useDispatch} from 'react-redux';
import { Navigate, useParams } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import { addtocart } from "../reducers/cartslice";
function Item(){
    
    let user;
    const dispatch=useDispatch();
    const products = useSelector((state) => {
        //console.log("####",state.movies);
        return state.products.products;
    });
    const navigate=useNavigate();
    const productId=useParams();
    var product = products.find((product) => {
        return product._id === productId.pid;
      });
    useEffect(()=>{
        
         user=JSON.parse(localStorage.getItem('user'));
        //console.log("eachitem user",user);
    },[])
    const checkuser=()=>{
        if(!user){
            navigate('/login')
        }
        else{
            let username=user.username;
            //console.log("*****",product)
            var obj={name:product.name,price:product.price,username:username,src:product.src}
            //console.log("else block",obj)
            dispatch(addtocart(obj));
            navigate('/cart')
        }
    }
    return(
                <div>   
                        <div className="main" >
                        <div>
                            <img src={product.src} className='imgcss'/>        
                        </div>
                        <div className='container'>
                                <h2>Product name:{product.name}</h2>
                                 <p>Price:{product.price}</p>
                                <p>Seller:{product.seller}</p>
                                <p>Description:{product.Description}</p>
                                <button onClick={()=>checkuser()} class="btn btn-warning mr-3">Add to cart</button>
                                <button onClick={()=>navigate("/")} class="btn btn-dark" >Back</button>
                         </div>
                        </div>
                 </div>
    )
}
export default Item