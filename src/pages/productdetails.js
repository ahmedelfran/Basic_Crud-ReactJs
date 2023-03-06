import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Productdetails = () => {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
            .then((res) => res.json())
            .then((product) => setProduct(product));
    }, );
    return (
        <div>
            <Link to="/products" className="btn btn-secondary btn-lg my-3 px-4">List Product</Link>
            {product &&

            <div className="card" style={{ width: "100%" }}>
                <img src={product.image} className="card-img-top m-auto" alt={product.title} style={{ width: "30%", height: "300px"}} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text my-3">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.category}</li>
                    <li className="list-group-item">{product.price}</li>
                </ul>
            </div>
            }
        </div>
    );
}

export default Productdetails;
