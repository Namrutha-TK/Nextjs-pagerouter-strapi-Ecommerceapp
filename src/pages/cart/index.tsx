'use client';

import React, { useContext} from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '../../context/CartContext';


export default  function Cart() {

    const cartContext = useContext(CartContext);
    const router=useRouter();
  
   if (!cartContext) {
    return <div>Loading...</div>; 
}
const cartItems=cartContext?.cartItems;
const addToCart=cartContext?.addToCart;
const removeFromCart=cartContext?.removeFromCart;
const  getCartTotal=cartContext?. getCartTotal;
const  clearCart=cartContext?. clearCart;
   

  return (
    <div className='container p-2'>
              <div className='row m-2 '>
               {
                cartItems.length>0? (<div className='col-12  table-responsive'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col text-center">Actions</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems&&cartItems.map((product:any) => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image} alt={""} style={{ width: '100px' }} />
                                    </td>
                                    <td className='p-2'>{product.title}</td>
                                    <td>₹{product.price}</td>
                                    <td className='text-center'>{product.quantity}</td>
                                    <td>
                                        <div className='d-flex gap-1'>
                                            
                                            <button type='button'onClick={()=>addToCart(product)}>+ </button>
                                           1 
                                          <button type='button'onClick={()=>removeFromCart(product)}>- </button>
                                     
                                       </div>
                                        
                                    </td>
                                    <td>₹{product.quantity * product.price}</td>
                                    <td>
                                    <button type='button' className="btn btn-warning" 
                                     onClick={()=>removeFromCart(product)}
                                    >Remove</button>
                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            ):(<div className='m-2 row justify-content-center'>
           <h4>No data</h4>
               
                </div>)
            }
                <div className='row align-items-center mt-3 d-flex flex-row-reverse'>
                    <div className="col-md-6 col-12 ">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title mb-2 ">Cart Total Details</h5>
                                <hr />
                                <p className=''>Subtotal: ₹{getCartTotal()}</p>
                                <hr />
                                <p>Shipping Fee: Free</p>
                                <hr />
                                <p>Total: ₹Subtotal: ₹{getCartTotal()}</p>
                                <hr />
                                <button type='button' className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                                
                                <button className="btn btn-danger btn-block pay-btn mx-2" 
                                onClick={clearCart}
                                >Clear All</button> 
                                </div>
                        </div>
                    </div>
                   
                </div>
            </div>  

            
        </div>
  )
}













