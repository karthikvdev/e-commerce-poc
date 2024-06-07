import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import "./style.scss";
import { addToCart } from "../../redux/cart.slice";
import { increaseQuantityIfExist } from "../../utils/common";
export const ProductCard = ({ product, ...props }) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state?.cart);
    const handleOnCart = () => {
        dispatch(addToCart(increaseQuantityIfExist(cart, product)))
    }


    return (
        <div {...props} className="product" title={product?.title}>
            <img className="product-image" alt={product?.title} src={product?.image} />
            <div className="product-details-container">
                <div>
                    <div className="product-title" >{product?.title}</div>
                    <div className="product-price">${product?.price}</div>
                </div>
                <Button className="add-to-cart-btn" buttonName={"Add to Cart"} onClick={handleOnCart} />
            </div>
        </div>
    )
}