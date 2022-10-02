import { useState } from 'react';

const Group = ({employees, selectedTeam, setTeam}) => {

    
    const groupTeamMembers = () => {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
        let teamA = { id: 1, team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
        let teamB = { id: 2, team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
        let teamC = { id: 3, team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
        let teamD = {id: 4, team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
        teams.push(teamD);
           
        return teams;
    };


    const [groupEmployees, setGroupEmployees] = useState(groupTeamMembers());



    const handleTeamClick = (event) => {
        let newGroupData = groupEmployees.map((groupedData) => {
            return groupedData.team === event.currentTarget.id ? {...groupedData, collapsed: !groupedData.collapsed} : groupedData
        });

        setGroupEmployees(newGroupData);
        setTeam(event.currentTarget.id);
    };

    return ( 
        <main className="container">
           {
            groupEmployees.map((item,idx) => {
                return (
                    <div key={item.id} className="card mt-2" style={{cursor: "pointer"}}>
                        <h4 id={item.team} 
                        className="card-header text-secondary bg-white"
                        onClick={handleTeamClick}>
                            Team Name: {item.team}
                        </h4>

                        <div id={"collapse" + item.team}
                            className={item.collapsed === true? "collapse": ""}
                        >
                        <hr />
                        {
                            item.members.map((member) => {
                                return (
                                    <div className="mt-2">
                                        <h5 className="card-title">
                                            <span className="text-dark">Full Name: {member.fullName}</span>
                                        </h5>
                                        <p>Designation: { member.designation }</p>
                                    </div>
                                )
                            })
                        }

                        </div>
                    </div>
                )
            })
           }
        </main>
     );
}
 
export default Group;