import React, { Component } from "react";
import DataBody from "./DataBody";
import API from "../utils/API";
import Nav from "./Nav";
import "../styles/DataTable.css";
import EmployeeContext from "../utils/EmployeeContext";

class DataTable extends Component {
  state = {
    results: [],
    search: "",
    filtered: []
  }

  componentDidMount() {
    this.searchEmployees();
  }

  randomEmployee = employees => {
    const randomEmployee = Math.floor(Math.random() * employees.length);
    return randomEmployee;
  }

  searchEmployees = () => {
    API.getUsers().then(res => {
      this.setState({results: res.data.results, filtered: res.data.results});
    })
    .catch(err => console.log(err));
  }

  sortByName = () => {
    const employees = this.state.results;
    employees.sort((employee1, employee2) => {
      if (employee1.name.first > employee2.name.first) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({results: employees});
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    console.log(name);
    // Updating the input's state
    this.setState({
      [name]: value,
      // eslint-disable-next-line no-useless-computed-key
      ["filtered"]: this.state.results.filter(result => result.name.first.toLowerCase().includes(value.toLowerCase()))
    });
  };

  render() {
    return (
      <EmployeeContext.Provider
        value={{
          ...this.state,
          handleInputChange: this.handleInputChange
        }}
      >
        <Nav />
        <div className="dataTable">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th onClick={() => this.sortByName()} scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filtered.map(result => (
                <DataBody
                  key={result.cell}
                  image={result.picture}
                  firstName={result.name.first}
                  lastName={result.name.last}
                  phone={result.cell}
                  email={result.email}
                  dob={result.dob.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </EmployeeContext.Provider>
    );
  }
}

export default DataTable;