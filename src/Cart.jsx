import { useState } from "react";
function Cart(props) {
    const [qty, setQty] = useState(0);

    const inc = () => {
        setQty(qty + 1);
    }

    const dec = () => {
        if (qty==0) return;
        setQty(qty - 1);
    }

   
    return (
        <div className="cart-box">
            <h3>Name : {props.name} </h3>
            <h3> Img : <img src={props.img} alt="" className="profile-img" />  </h3>
            <h3>Price :{props.price} </h3>
            <h3>Qty :{qty} </h3>
            <h3 >Total:{qty * props.price} </h3>
            <button onClick={dec}>-</button>
            <button onClick={inc} >+</button>
        </div>
      
     
    )

}

export default Cart;

