import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent } from "@mui/material";
import { Card,Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";


export default function Detail() {

    const staff = useParams();

    const[APIData, setAPIData] = useState([]);
    const getStaffsUrl = `https://6547353a902874dff3ac092a.mockapi.io/api/contacts/contacts/${staff.id}`;

    useEffect(() => {
        fetch(getStaffsUrl,{method:'GET'}).then(
            response => {
                if(!response.ok) {
                    throw new Error(`HTTP status: ${response.status}`);
                }
                return response.json();
            })
            .then(data=>{setAPIData(data)})
            .catch(error=>console.log(error.message));
        
    },[getStaffsUrl])



    return(
      <div>
         <h1>Detail</h1>
         <Grid container rowSpacing={2} >
          <Grid className='parent' item xs={12}>
          <Card className='child' sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={APIData.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a style={{textDecoration: "none", color: "black"}} href={`detail/${APIData.id}`}>Name: {APIData.name}</a>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.address}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.age}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.createdAt}
        </Typography>
       
      </CardContent>
    </Card>


          </Grid>


          </Grid>
        
  
   
        

      </div>

     
    

         


  
       
            
      
    )
}