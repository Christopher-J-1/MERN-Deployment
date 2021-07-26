import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';



const PetDetail = (props) => {

    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=> {
                console.log("******************")
                console.log(res.data.results)
                console.log("*****************")
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log("error", err))
    },[])


    const deletePet =(e)=>{
        console.log("******deleting******")
        axios.delete(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log("******deleting******")
                console.log(res)
                console.log("******deleting******")
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }
    
    return (
        <div>
            <h1>Pet Shelter</h1><Link to= {`/`} className="btn btn-primary m-2">back to home</Link>
            <h3>Details about: {petInfo.name}.</h3><button onClick= {deletePet} className="btn btn-danger">Adopt {petInfo.name}</button>
            <p>Pet Type: {petInfo.type}</p>
            <p>Pet Description: {petInfo.description}</p>
            <p>Skills: {petInfo.skill1}, {petInfo.skill2}, {petInfo.skill3}</p>
        </div>
    );
};


export default PetDetail;