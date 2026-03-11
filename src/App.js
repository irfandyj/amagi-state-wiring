import SearchBar from './components/SearchBar';
import PatientList from './components/PatientList';

import './App.css';
import { useState } from 'react';

function App() {
  const patients = [
    { id: "P101", name: "Santos, Maria", status: "Active", balance: 1500.00, ward: "A" },
    { id: "P102", name: "Reyes, Jose", status: "Discharged", balance: 0.00, ward: "B" },
    { id: "P103", name: "Cruz, Ana", status: "Active", balance: 0.00, ward: "A" },
    { id: "P104", name: "Bautista, Luis", status: "Active", balance: 5200.50, ward: "C" },
    { id: "P105", name: "Garcia, Elena", status: "Discharged", balance: 300.00, ward: "B" }
  ];
  const [searchQuery, setSearchQuery] = useState("")

  function onSearchChange(value) {
    console.log("value")
  }

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <PatientList patients={patients}></PatientList>
    </div>
  );
}

export default App;
