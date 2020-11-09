import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;