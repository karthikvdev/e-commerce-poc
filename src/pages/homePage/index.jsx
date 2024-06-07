import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../../component/productCard";
import { SearchComponent } from "../../component/search-component";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/product.slice";
import { baseURL, scrollTop } from "../../utils/common";

export const HomePage = () => {
    const productStore = useSelector((state) => state?.product);
    const [allProduct, setAllProduct] = useState(productStore)
    const [products, setProducts] = useState(productStore)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const getProductInfo = async () => {
        setLoading(true);
        try {
            const config = {
                baseURL,
                method: "GET",
                url: "products"
            }
            const { data, status } = await axios(config);
            if (status === 200) {
                setProducts(data);
                setAllProduct(data);
                dispatch(addProducts(data));
            }

        } catch (error) {
            setProducts([]);
            setAllProduct([]);
            dispatch(addProducts([]));
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductInfo();
        scrollTop()
        // eslint-disable-next-line
    }, [])

    const handleOnFilter = (filter) => {
        const allProducts = JSON.parse(JSON.stringify(allProduct));
        setProducts(allProducts?.filter((product) => product?.title?.toLowerCase()?.includes(filter?.filters?.search?.toLowerCase()) && product?.category?.includes(filter?.filters?.category?.toLowerCase())))
    }

    return (
        <div>
            <SearchComponent filters={(filters) => handleOnFilter({ filters })} />
            {products?.length ?
                <div className="product-list">
                    {products?.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
                : <div>{loading ? "Fetching Products..." : "No products found."}</div>
            }
        </div>
    )
}