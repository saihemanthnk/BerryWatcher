import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
import diseasesArray from "../Data/Data"

function Card() {

    
  return (
    <div className="test" id="lib">
      {diseasesArray.map((disease) => {
        return (
         
            <div className="box1 box" key={disease.name}>
              <div className="box-content">
                <h2>{disease.name}</h2>
                <div className="img" style={{backgroundImage:`url(${disease.imageUrl})`}}></div>
                <Link to={`/details/${disease.name}`} className="shop">
                  View
                </Link>
              </div>
            </div>
        
        );
      })}
    </div>
  );
}

export default Card;
