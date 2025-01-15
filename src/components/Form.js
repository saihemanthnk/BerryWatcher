import React from "react";
import {useState} from "react" 
import { useNavigate } from 'react-router-dom';

import axios from "axios"



const Form = () => {


    const navigate = useNavigate()


    const [file,setFile] = useState(null) 



    const submitFormHandler = async(event) => {

        event.preventDefault() 

        try{

            const formData = new FormData() 
            formData.append('file',file) 

            const response = await axios.post("http://localhost:3001/upload",formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            })

            console.log(response)


            if(response){

                navigate("/results")

            }


           


        }

        catch(err){

            console.error('Error submitting form:', err);

        }



    }


    const changeHandler = (event) => {
        setFile(event.target.files[0]) 
    }


  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <input type="file" name="file" onChange={changeHandler}/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
