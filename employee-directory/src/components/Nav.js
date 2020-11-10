import SearchBox from "./SearchBox";
import "../styles/Nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <div className="navbar-form">
          <div className="form-group">
            <SearchBox />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;