import React, { useEffect, useMemo } from "react";
import "./style.scss";
import { ProductList } from "./product";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../component/button";
import { useNavigate } from "react-router-dom";
import { addToCart, emptyCart } from "../../redux/cart.slice";

export const CartPage = () => {
    const cartProduct = useSelector((state) => state?.cart);
    const [products, setProducts] = React.useState(cartProduct);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const grandTotal = useMemo(() => {
        return cartProduct?.reduce((total, item) => total + (item?.price * (item?.quantity || 1)), 0);
    }, [cartProduct])



    const onRemoveProduct = (selectedProduct) => {
        const filterProduct = cartProduct?.filter((product) => product?.id !== selectedProduct?.id);
        dispatch(addToCart(filterProduct));
        setProducts(filterProduct);
    };

    useEffect(() => {
        setProducts(cartProduct);
    }, [cartProduct])


    return (
        <div>
            <header className="container">
                <h1>Shopping Cart</h1>
            </header>

            {products.length > 0 ? (
                <div>
                    <ProductList
                        products={products}
                        onRemoveProduct={onRemoveProduct}
                    />

                    <section className="container">
                        <div className="summary">
                            <ul>
                                <li className="total">
                                    Grand Total <span>$ {grandTotal?.toFixed(2)}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="checkout action-container ">
                            <Button className="outlined" buttonName={"Empty Cart"} onClick={() => dispatch(emptyCart())} />
                            <Button buttonName={"Back to Home"} onClick={() => navigate("/")} />
                        </div>
                    </section>
                </div>
            ) : (
                <div className="empty-product">
                    <h3>There are no products in your cart.</h3>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
}