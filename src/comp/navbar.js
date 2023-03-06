

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    Basic Crud
                    </a>
                
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" aria-current="page" href="/#">
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
