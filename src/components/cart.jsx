import React, { useState, useEffect } from 'react'
// import {useSelector} from 'react-redux'
import { getcarts } from '../reducers/cartslice'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteitem } from '../reducers/cartslice';

function Cart() {

  let user = useSelector((state) => {

    return state.users.user;
  });;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector((state) => {

    return state.cart.carts;
  });

  useEffect(() => {
    dispatch(getcarts());
    console.log("&&&", carts)
  }, [dispatch]);

  console.log("+++++", user)
  return (
    <div className='p1'>
      {/* <div className='cartnav'>
              <button onClick={()=>navigate('/')}>Back</button>
              <button onClick={()=>{
                alert("Order placed successfully");
                navigate('/')
                }}>Buy Now</button>
            </div> */}
      <nav class="navbar navbar-light bg-dark w-100">
        {/* <form class="container-fluid justify-content-start"> */}
          <button class="btn btn-light" type="button" onClick={()=>navigate('/')}>Back</button>
          <button class="btn btn-outline-success me-2" type="button" onClick={()=>{
                alert("Order placed successfully");
                navigate('/')
                }}>Buy Now</button>
        {/* </form> */}
      </nav>
      {
        user != null && carts && carts.map((product, i) => {
          //console.log(product._id)
          if (product.username == user.username) {
            return (
              <div className='card'>
                <img src={product.src} className='image' />
                <h2>{product.name}</h2>
                <h3>Product Price:{product.price}</h3>
                <button class="btn btn-danger" onClick={() => dispatch(deleteitem(product._id))}>Delete</button>
              </div>

            )
          }
        })
      }
    </div>
  )
}
export default Cart;