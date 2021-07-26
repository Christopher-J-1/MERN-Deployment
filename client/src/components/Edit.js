import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import {Link} from '@reach/router';

const Edit = (props) => {

    const [petInfo, setPetInfo]= useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log("******")
                console.log(res)
                console.log("******")
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])

    const changehandler = (e)=>{
        console.log("changing stuff")
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }

    const [formErrors, setFormErrors] = useState({})


    const submithandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.id}`, petInfo )
            .then(res=> {
                console.log("******************")
                console.log(res)
                console.log("******************")
                if(res.data.results){
                    navigate("/")
                }else{
                    console.log(res.data.error)
                    setFormErrors(res.data.error.errors)
                }
            })
            .catch(err=> console.log("error when submitting the form!", err))
    }

    return (
        <div>
            <h1>Pet Shelter</h1><Link to= {`/`} className="btn btn-primary m-2">back to home</Link>
            <h3>Edit: {petInfo.name} </h3> 
            <form onSubmit={submithandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange= {changehandler} type="text" name="name" id="" className="form-control" value={petInfo.name} />
                    {formErrors.name? <p className="text-danger">{formErrors.name.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input onChange= {changehandler} type="text" name="type" id="" className="form-control" value={petInfo.type} />
                    {formErrors.type? <p className="text-danger">{formErrors.type.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea onChange= {changehandler} name="description" id="" cols="30" rows="10" className="form-control" value={petInfo.description}></textarea>
                    {formErrors.description? <p className="text-danger">{formErrors.description.message}</p>: ""}
                </div>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input onChange= {changehandler} type="text" name="skill1" id="" className="form-control" value={petInfo.skill1} />
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input onChange= {changehandler} type="text" name="skill2" id="" className="form-control" value={petInfo.skill2} />
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input onChange= {changehandler} type="text" name="skill3" id="" className="form-control" value={petInfo.skill3} />
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};


export default Edit;