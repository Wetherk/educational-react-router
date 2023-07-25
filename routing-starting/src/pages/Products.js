import { Link } from "react-router-dom";

import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
    {
        id: "p1",
        title: "Product 1",
        description: "Nice product",
    },
    {
        id: "p2",
        title: "Product 2",
        description: "Nice product",
    },
    {
        id: "p3",
        title: "Product 3",
        description: "Nice product",
    },
    {
        id: "p4",
        title: "Product 4",
        description: "Nice product",
    },
];

const Products = () => {
    return (
        <>
            <h1>My Products</h1>
            <ul className={classes["product-list"]}>
                {DUMMY_PRODUCTS.map((product) => (
                    <li className={classes.product} key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <Link to={product.id} className={classes.product__link}>
                            To Product Details
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;
