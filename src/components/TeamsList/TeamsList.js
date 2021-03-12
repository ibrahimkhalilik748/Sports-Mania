import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamsList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TeamDetails from '../TeamDetails/TeamDetails';



const TeamsList = (props) => {
    // console.log(props.teams.idTeam)
    const {strTeamBadge, strAlternate, idTeam} = props.teams;
    return (

               
                    <div className="box"><br/>
                        <img src={strTeamBadge} alt=""/>
                        <h2 style={{color: 'black'}}>{strAlternate}</h2>
                        <p style={{color: 'black'}}>Sports type: Football</p>
                        <h6>{idTeam}</h6>
                        <Link to={"/"+idTeam}><h6 className="btn btn-primary">Explore</h6></Link><br/><br/>
                    </div>
  
   
    );
};

export default TeamsList;