import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    let { id } = useParams();
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Product {id}</h1>
            <p className="text-gray-600">This is a detailed description of product {id}.</p>
        </div>
    );
}
export default ProductDetails;