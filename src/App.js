import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import Group from './components/Group';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  const employeesData = [
    { id: 1, fullName: "Asta", designation: "Black Bull", gender: "male", teamName: "TeamA" },
    { id: 2, fullName: "Finral Roulacase", designation: "Black Bull", gender: "male", teamName: "TeamD" },
    { id: 3, fullName: "Yuno", designation: "Golder Dawn", gender: "male", teamName: "TeamD" },
    { id: 4, fullName: "Noelle Silva", designation: "Black Bull", gender: "female", teamName: "TeamA" },
    { id: 5, fullName: "Mimosa Vermillion", designation: "Golder Dawn", gender: "female", teamName: "TeamD" },
    { id: 6, fullName: "Leopold Vermillion", designation: "Crimson Lion", gender: "male", teamName: "TeamA" },
    { id: 7, fullName: "Sekke Bronzazza", designation: "Green Mantis", gender: "male", teamName: "TeamB" },
    { id: 8, fullName: "Zora Ideale", designation: "Black Bull", gender: "male", teamName: "TeamB" },
    { id: 9, fullName: "Gauche Adlai", designation: "Black Bull", gender: "male", teamName: "TeamB" },
    { id: 10, fullName: "Gordon Agrippa", designation: "Black Bull", gender: "male", teamName: "TeamA" },
    { id: 11, fullName: "Klaus Lunettes", designation: "Golden Dawn", gender: "male", teamName: "TeamC" },
    { id: 12, fullName: "Vanessa Enoteca", designation: "Black Bull", gender: "female", teamName: "TeamC" },
    { id: 13, fullName: "Luck Voltia", designation: "Black Bull", gender: "male", teamName: "TeamC" },
    { id: 14, fullName: "En Ringard", designation: "Green Mantis", gender: "male", teamName: "TeamA" }
];


const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeesData);
const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB');

const handleTeamSelection = (event) =>{
  setTeam(event.target.value);
};

const handleEmployeeCardClick = (event) => {
  const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.TeamName === selectedTeam) ? {...employee, teamName:''} : { ...employee, teamName: selectedTeam }
      : employee);
  
      setEmployees(transformedEmployees);
};


  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [employees, selectedTeam]);

  return (
    <div className="App">

      <Router>
      <Navbar />
      <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
        <Routes>
            <Route path="/" element={<Employees employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamSelection={handleTeamSelection} />}></Route>
            <Route path="/group" element={<Group />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
