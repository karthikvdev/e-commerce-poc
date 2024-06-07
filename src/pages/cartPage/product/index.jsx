import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
import { increaseQuantityIfExist, removeQuantityIfExist } from "../../../utils/common";
import "./style.scss";

export const ProductList = ({ products, onRemoveProduct }) => {

    const cart = useSelector((state) => state?.cart);
    const dispatch = useDispatch();
    const handleOnAdd = (product) => {
        dispatch(addToCart(increaseQuantityIfExist(cart, product)))
    }

    const handleOnRemove = (product) => {
        dispatch(addToCart(removeQuantityIfExist(cart, product)))
    }

    return (
        <section className="product-list-container">
            <ul className="products">
                {products.map((product, index) => {
                    return (
                        <li className="row" key={index}>
                            <div className="col left">
                                <div className="thumbnail">
                                    <img className="image" src={product.image} alt={product.name} />
                                </div>
                                <div className="detail">
                                    <div className="name">
                                        {product.title}
                                    </div>
                                    <div className="price">${product?.price}</div>
                                </div>
                            </div>

                            <div className="col right">
                                <div className="quantity">
                                    <input
                                        type="button"
                                        className="spinner right"
                                        value={"-"}
                                        onClick={() => handleOnRemove(product)}
                                    />
                                    <input
                                        type="text"
                                        className="quantity"
                                        disabled
                                        value={product?.quantity}
                                    />
                                    <input
                                        type="button"
                                        className="spinner left"
                                        value={"+"}
                                        onClick={() => handleOnAdd(product)}
                                    />

                                </div>

                                <div className="remove">
                                    <svg
                                        onClick={() => onRemoveProduct(product)}
                                        version="1.1"
                                        className="close"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        enableBackground="new 0 0 60 60"
                                    >
                                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                                    </svg>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}