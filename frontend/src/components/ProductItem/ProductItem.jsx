import React, { useContext, useState } from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const ProductItem = ({ image, name, price, desc, id }) => {

    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
    const [imageSrc, setImageSrc] = useState(`${url}/images/${image}`);

    const handleError = () => {
        // If the image fails to load, set the src to the placeholder image
        setImageSrc(`${url}/images/placeholder.png`);
    };
    return (
        <div className='prodt-item'>
            <div className='prodt-item-img-container'>
                <img className='prodt-item-image' src={imageSrc} onError={handleError} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className="prodt-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="prodt-item-info">
                <div className="prodt-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="prodt-item-desc">{desc}</p>
                <p className="prodt-item-price">{currency}{price}</p>
            </div>
        </div>
    )
}

export default ProductItem
