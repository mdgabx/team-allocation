import { useState } from 'react';
import femaleProfile from '../assets/img/femaleProfile.jpg';
import maleProfile from '../assets/img/maleProfile.jpg';

const Employees = () => {

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


    const [employees, setEmployees] = useState(employeesData);
    const [selectedTeam, setTeam] = useState("TeamB");

    const handleTeamSelection = (event) =>{
        setTeam(event.target.value);
    };

    const handleEmployeeCardClick = (event) => {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
            ?(employee.TeamName === selectedTeam) ? {...employee, teamName:''} : { ...employee, teamName: selectedTeam }
            : employee);
        
            setEmployees(transformedEmployees);
    };

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelection}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>

                <div className="col-8">
                    <div className="card-collection"> 
                    {
                    employees.map((employee) => {
                    return (
                        <div key={employee.id} id={employee.id} className={ employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'  } onClick= {handleEmployeeCardClick}>
                          { employee.gender === "male"  && <img src={maleProfile} alt="male profile"  className="card-img-top" />  } 
                          { employee.gender === "female"  && <img src={femaleProfile} alt="female profile" className="card-img-top" />  }    
                            <div className="card-body">
                                <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                <p className="card-text"><b>Designation: {employee.designation}</b></p>
                            </div>
                        </div>
                        )
                    })
                }
                    </div>
                </div>
            </div> 
        </main>
    )
}

export default Employees;