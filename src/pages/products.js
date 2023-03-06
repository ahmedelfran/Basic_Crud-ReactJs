import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Products = () => {
    const [products, setproducts] = useState([]);

    const getAllProduct = () => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((Date) => setproducts(Date));
    }

    // ========= DELETE ====================
    const deleteProduct = (product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                fetch(`http://localhost:3000/products/${product.id}`, { method: "DELETE" })
                    .then((res) => res.json())
                    .then((Date) => { getAllProduct() });
            }
        });
    }

    useEffect(() => {
        getAllProduct()
    }, []);

    return (
        <div id="products">
            <h1 className="mt-2"> products Page </h1>
            <Link to="/addproduct" className="btn btn-success btn-lg my-3 px-4">
                Add Product
            </Link>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th>{product.id}</th>
                                <td style={{ width: "20%"}}>{product.title.slice(0 , 20)}</td> 
                                {/* .slice(0 , 20) */}
                                <td style={{ width: "40%"}}>{product.description.slice(0 , 30)}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/products/${product.id}`} className="btn btn-warning m-2">
                                        View
                                    </Link>
                                    <Link to={`/update/${product.id}`} className="btn btn-primary m-2">
                                        Edit
                                    </Link>
                                    <button type="button" className="btn btn-danger m-2" onClick={() => deleteProduct(product)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
