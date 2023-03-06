import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AddProduct = () => {
    const [title , setTitle] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");

    const navigate = useNavigate();

    const forSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:3000/products", {
            title ,
            price ,
            description
        })
        .then((data) => {
            navigate('/products');
        })};

    return (
        <div>
            <h1 className="my-2"> Add products Page </h1>

            <form className="m-auto mt-5" style={{ width: "50%"}} onSubmit={forSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        
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
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddProduct;
