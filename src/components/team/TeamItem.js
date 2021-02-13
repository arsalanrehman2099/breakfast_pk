import React from "react";

function TeamItem(props) {
  return (
    <div className="team-item-container">
    <div>
      
      <img src={props.img} alt="" />
    </div>
      <h3>{props.name}</h3>
      <p> - {props.dsg} - </p>
    </div>
  );
}

export default TeamItem;
