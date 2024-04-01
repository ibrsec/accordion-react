import React, { useEffect, useState } from "react";
import "./CardEach.scss"; 
const CardEach = (props) => { 
  const [isOpen,setIsOpen] = useState(false);
  const openHandle = (e) => {
    setIsOpen(!isOpen); 
 

    }
     
  return (
    <div className="card-container">
      <div className="card-name border border-2  py-1 px-3 d-flex align-items-center justify-content-between" onClick={openHandle}>
        <p>{props.user.name.title} {props.user.name.first} {props.user.name.last}</p>
        <span className="fs-4 chevron">🔽</span>
      </div>
      <div className={"card-content-container " + (isOpen ? 'open' : '')} >
        <div className="card-content">

        <div className="img-container">
        <img src={props.user.picture.large} alt="" />
        </div>
        <div className="user-infos">
          <p className="username">{props.user.name.title} {props.user.name.first} {props.user.name.last}</p>
          <p className="usermail">{props.user.email}</p>
          <p className="usergender">{props.user.gender}</p>
        </div>
        </div>
      </div>




 
    </div>
  );
};

export default CardEach;
