import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();

    return (
        <>
            <h1>Product details</h1>
            <p>{params.productId}</p>
            <Link to=".." relative="path">
                Back
            </Link>
        </>
    );
};

export default ProductDetail;
