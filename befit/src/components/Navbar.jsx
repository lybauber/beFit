import Navitem from "./Navitem";

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid contain">
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav ">
            <li className="nav-item">
                <Navitem name="Nutrition" />
            </li>
            <li className="nav-item">
                <Navitem name="Clothes & Accessories" />
            </li>
            <li className="nav-item">
                <Navitem name="Athletes" />
            </li>
            <li className="nav-item">
                <Navitem name="Blog" />
            </li>
            </ul>
            </div>
            
            </div>
        
        </nav>
        
    )
}

export default Navbar;
