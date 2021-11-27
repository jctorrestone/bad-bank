import { NavLink } from "./context";

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/" data-toggle="tooltip" title="Main page">BadBank</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/CreateAccount/" data-toggle="tooltip" title="Create a new account">Create Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login/" data-toggle="tooltip" title="Log in with your account">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deposit/" data-toggle="tooltip" title="Deposit money">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/withdraw/" data-toggle="tooltip" title="Withdraw money">Withdraw</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alldata/" data-toggle="tooltip" title="See all data">AllData</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;