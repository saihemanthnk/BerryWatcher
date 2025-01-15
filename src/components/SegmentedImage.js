import React from 'react'
 
import axios from "axios"

import { useState,useEffect } from 'react'
import "./SegmentedImage.css"

const SegmentedImage = () => {

    const [segmentedImgPath,setSegmentedImgPath] = useState("") 

    const [loading,setLoading] = useState(true)


    useEffect(()=>{

        async function getSegmentedImage(){

            try{

               const response =  await axios.get("http://localhost:3001/latest-segmented-image")
               console.log(response)
               setSegmentedImgPath('http://localhost:3001'+response.data.filePath1)

            }

            catch(err){
                console.error(err)
            }

            finally{
                setLoading(false)
            }

        }

        getSegmentedImage()

        

    },[segmentedImgPath])




    


  return (
    <div  className="segmentedImageContainer">

         <h1 className='loadingText'>Segmented Image</h1>

         {loading?<p>"Loading"</p>:<img className='segmentedImage' src={segmentedImgPath} alt="Segmented Image" />}
         

      
    </div>
  )
}

export default SegmentedImage
