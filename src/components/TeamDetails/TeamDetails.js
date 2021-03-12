import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const TeamDetails = (props) => {
    // const idTeam = props.teams;
    const {idTeam} = useParams();
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(response => response.json())
        .then(data => setTeams(data.teams[0]))
    }, [idTeam])
    return (
        <div>
            <Details teams={teams}></Details>
        </div>
    );
};

export default TeamDetails;