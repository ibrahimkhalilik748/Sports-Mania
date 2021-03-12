import React from 'react';
import './Details.css'

const Details = (props) => {
    const {strGender, strLeague, strCountry, strTeamFanart3, strDescriptionEN, strDescriptionDE, strStadium}  = props.teams;
    return (
        <div className="detailsBody"><br/><br/>
            <div className="banner">
                <div className="info">
                    <h2 className="color">{strLeague}</h2>
                    <h6 className="color">Country : {strCountry}</h6>
                    <h6 className="color">Sports type: Football</h6>
                    <h6 className="color">Gender : {strGender}</h6>
                    <h6 className="color">Stadium : {strStadium}</h6>
                </div>
                <div className="img">
                    <img src={strTeamFanart3} alt=""/><br/><br/>
                </div>
            </div><br/>
            <p className="color">{strDescriptionDE}</p><br/>
            <p className="color">{strDescriptionEN}</p><br/>
        </div>
    );
};

export default Details;