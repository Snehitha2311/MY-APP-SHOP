import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './DataProvider';
import Colors from './Colors';
import Sizes from './Sizes';
import DetailsThumb from './DetailsThumb';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Cart() {
    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                 return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }

    const increase = id => {
        cart.forEach(item => {
            if(item._id === id){
                item.count +=1;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id) {
                   cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }

    if(cart.length === 0)
        return <h4 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h4>
    
    
    return (
        <div>
            {
                cart.map(product => (
                    <div className="details cart" key={product._id}>
                        <div className="img-container" 
                            style={{ backgroundImage: `url(${product.images[0]})` }} />

                        <div className="box-details">
                            <p><b>{product.description}</b></p>
                            <p><b>{product.content}</b></p>
                            {/* <h2 title={product.title}>{product.title}</h2> */}
                            <h3>${product.price}</h3>
                            <Colors colors={product.colors}/>
                            <Sizes sizes={product.sizes}/>
                            {/* <p>{product.description}</p>
                            <p>{product.content}</p> */}
                            <div className = "amount">
                                <button className="count" onClick={() => reduction(product._id)}> - </button>
                                <span>{product.count}</span>
                                <button className="count" onClick={() => increase(product._id)}> + </button>
                            </div>

                            <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                            
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: ${total}</h3>
            </div>
        </div>
    )
}