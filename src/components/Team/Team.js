import React, { useEffect, useState } from 'react';
import TeamsList from '../TeamsList/TeamsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => setTeams(data.teams))
    }, []);

    return (
        <div className="color">
            <div className=" body">
                {
                    teams.map(team => <TeamsList teams={team}></TeamsList> )
                }
            </div>
        </div>
    );
};

export default Team;