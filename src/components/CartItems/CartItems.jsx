import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const CartItems = () => {
    const {getTotalCartAmount, all_product,cartItems,removeFromCart} = useContext(ShopContext)
    const notify = ()=>{
        toast("Removed From Cart Succesfully")
    }
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove/Decrease</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
        return <div>
            <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} className='carticon-product-icon' alt=''/>
                <p className='title'>{e.name}</p>
                <p className='price'>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p className='total'>${e.new_price*cartItems[e.id]}</p>
                <button src={remove_icon} onClick={()=>{removeFromCart(e.id);notify()}} alt='' className='decr'>-</button>
            </div>
            <hr/>
        </div>
            }
            return null
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div className=''>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cartitems-promocode'>
                <p>If you have a promo code, Enter it here</p>
                <div className='cartitems-promobox'>
                    <input type='text' placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CartItems