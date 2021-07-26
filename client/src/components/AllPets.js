import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllPets = () => {
    const [allPets, setAllPets] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            console.log("logging response!", res)
            setAllPets(res.data.results)
        })
        .catch(err=> console.log("error with call", err))
    })

    return (
        <div>
            <h1>Pet Shelter</h1><Link to= {`/pets/new`} className="btn btn-primary m-2">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            {allPets.sort((a,b)=> a.type.localeCompare(b.type)).map((pet,i)=>{
                return <div key={i} className="card">
                <div className="card-body">
                    <h4 className="card-title">{pet.name}</h4>
                    <p>{pet.type}</p>
                    <Link to= {`/pets/${pet._id}`} className="btn btn-primary m-2">Details</Link>|  |<Link to= {`/edit/${pet._id}`} className="btn btn-primary m-2">Edit</Link>
                </div>
            </div>
            })}
        </div>
    );
};

export default AllPets;