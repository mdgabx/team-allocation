
import femaleProfile from '../assets/img/femaleProfile.jpg';
import maleProfile from '../assets/img/maleProfile.jpg';

const Employees = ({ selectedTeam, employees, handleEmployeeCardClick, handleTeamSelection }) => {

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