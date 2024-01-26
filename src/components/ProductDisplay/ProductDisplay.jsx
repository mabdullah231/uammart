import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    const notify = ()=>{
        toast("Added To Cart Succesfully")
    }
  return ( 
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
                From casual chic to formal finesse, our collection transcends occasions, offering a versatile array of choices. Whether you're seeking the perfect ensemble for a glamorous evening out or a laid-back weekend look, UAM MART Specialty has you covered.
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id);notify()}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt,Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ProductDisplay