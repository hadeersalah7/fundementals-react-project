import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increase, decrease } from '../fetature/cart/cartSlice'
import { useDispatch } from 'react-redux'
const CartItem = ({ id, title, price, img, amount }) => {
    const dispatch = useDispatch()
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <p className="item-price">{price}</p>
                <button className='remove-btn' 
                onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={() => dispatch(increase({id}))}>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className="amount-btn" onClick={() => {
                    if(amount === 1 ){
                        dispatch(removeItem(id))
                        return;
                    }
                    dispatch(decrease({id}))}}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem