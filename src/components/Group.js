import { useState, useTransition } from 'react';

const Group = ({employees, selectedTeam, setTeam}) => {

    const [groupEmployees, setGroupEmployees] = useState(groupTeamEmployees());

    const groupTeamEmployees = () => {
        let teams = [];
    };

    return ( 
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Group Team</h1>
                </div>
            </div>
        </main>
     );
}
 
export default Group;