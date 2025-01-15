import React from "react";
import { useParams } from "react-router-dom";
import diseasesArray from "../Data/Data";
import "./DiseaseDetails.css"
import { Center } from "@react-three/drei";

function DiseaseDetails() {
  const { diseasename } = useParams();
  console.log(diseasename);
  const disease = diseasesArray.find((disease) => {
    return disease.name === diseasename;
  });

  if (!disease) {
    return <div>Disease not found</div>;
  }

  return (
    <>
      <div className="card-container">
        <div className="card-content">
          <h2 style={{color:`${disease.color}`}}>{disease.name}</h2>
          <p>{disease.description}</p>
        </div>
        <div className="card-image">
          <img src={disease.imageUrl} alt={disease.name} />
        </div>
      </div>
    </>
  );
}

export default DiseaseDetails;
