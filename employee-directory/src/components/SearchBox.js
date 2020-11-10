import EmployeeContext from "../utils/EmployeeContext";

function SearchBox() {
  return (
    <EmployeeContext.Consumer>
      {({search, handleInputChange}) => (
        <input 
        className="form-control" 
        type="text"
        placeholder="Search" 
        name="search" 
        onChange={handleInputChange}
        value={search}
      />
      )}
    </EmployeeContext.Consumer>
  )
}

export default SearchBox;