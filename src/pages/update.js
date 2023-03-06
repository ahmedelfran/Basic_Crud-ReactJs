/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            });
    }, []);

    const Data = {
        title: title,
        price: price,
        description: description
    }
    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/products/${id}`, Data)
            .then(navigate('/products'));
    }

    return (
        <div>
            <h1 className="mt-2"> Update products Page </h1>
            <Link to="/products" className="btn btn-secondary btn-lg my-3 px-4">List Product</Link>

            <form className="m-auto" style={{ width: "50%" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Price
                    </label>
                    <input
                        type="numb"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button onClick={update} className="btn btn-primary">
                    Update
                </button>
            </form>

        </div>
    );
}

export default Update;
