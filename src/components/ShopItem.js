import { useRef } from "react";

export default function ShopItem(props) {
    const cartInput = useRef(null);

    function handleClick() {
        const newCart = [...props.cart];
        const newItem = props.item;
        const cartAdd = Number(cartInput.current.value);

        if (cartAdd === 0) return;

        if (newCart.length>0) {
            let duplicate = false;
            for (let item in newCart) {
                if (newCart[item].id === newItem.id) { // If the item is already in the cart
                    duplicate = true;
                    newCart[item].inCart += cartAdd;
                } else {
                    newItem.inCart = cartAdd;
                };
            };
            duplicate ? void(0) : newCart.push(newItem);
        } else {
            newItem.inCart = cartAdd;
            newCart.push(newItem);
        };
        props.setCart(newCart);
    };

    return (
        <div className="itemContainer">
            <h4>{props.item.name}</h4>
            <section className="item" style={{ backgroundColor: props.item.color }}>
            </section>
            <p>{props.item.price}</p>
            <input ref={cartInput} type="number" defaultValue="1" />
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
};