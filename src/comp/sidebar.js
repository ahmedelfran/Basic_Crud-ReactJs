import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <ul className="list-unstyled">
                <li>
                    <Link  to="/products"> Product </Link>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;
