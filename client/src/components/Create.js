import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";
import {Link} from '@reach/router';


const Create = () => {
    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [formErrors, setFormErrors] = useState({})


    const changeHandler = (e)=>{
        console.log("changing input")
        console.log(e.target.name)
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }


    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/create", formInfo)
            .then(res=> {
                console.log("**************")
                console.log(res)
                console.log("**************")
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
        <div className = "container">
            <h1>Pet Shelter</h1><Link to= {`/`} className="btn btn-primary m-2">back to home</Link>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange= {changeHandler} type="text" name="name" id="" className="form-control" />
                    {formErrors.name? <p className="text-danger">{formErrors.name.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input onChange= {changeHandler} type="text" name="type" id="" className="form-control" />
                    {formErrors.type? <p className="text-danger">{formErrors.type.message}</p>:""}
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea  onChange= {changeHandler} name="description" id="" cols="30" rows="10" className="form-control"></textarea>
                    {formErrors.description? <p className="text-danger">{formErrors.description.message}</p>: ""}
                </div>
                <div className="form-group">
                    <label>Skill 1:</label>
                    <input onChange= {changeHandler} type="text" name="skill1" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input onChange= {changeHandler} type="text" name="skill2" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input onChange= {changeHandler} type="text" name="skill3" id="" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" />
            </form>
        </div>
    );
};


export default Create;