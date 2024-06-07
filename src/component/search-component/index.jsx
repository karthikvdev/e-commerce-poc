import { useEffect, useState } from "react"
import { Dropdown } from "../dropdown"
import axios from "axios";
import { TextField } from "../textfield";
import "./style.scss";
import { CartIcon } from "../../icons/cartIcon/cartIcon";
import { baseURL } from "../../utils/common";

export const SearchComponent = ({ filters }) => {
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState({ search: "", category: "" })

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = async () => {
        try {
            const config = {
                baseURL,
                method: "GET",
                url: "products/categories"
            }
            const getCategories = await axios(config);
            setCategories(getCategories?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        filters(filter);
        // eslint-disable-next-line
    }, [filter])

    const handleOnSelect = (event) => {
        setFilter((filter) => ({ ...filter, category: event?.target?.value === "All Categories" ? "" : event?.target?.value }))
    }




    return (
        <div>
            <div className="search-component">
                <Dropdown options={["All Categories", ...categories]} placeholder={"Select Categories"} onChange={handleOnSelect} />
                <TextField type="search" placeholder="Search product" onChange={(evt) => setFilter((filter) => ({ ...filter, search: evt?.target?.value }))} />
                <CartIcon />
            </div>
        </div>
    )
}