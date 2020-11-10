import React from "react";

const EmployeeContext = React.createContext({
  results: [],
  search: "",
  handleInputChange: () => {}
});

export default EmployeeContext;
