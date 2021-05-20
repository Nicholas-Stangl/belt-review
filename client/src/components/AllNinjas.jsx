import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const AllNinjas = () => {
        const [allNinjas, setAllNinjas] = useState ([])

        const [deleteClicked, setDeleteClicked] = useState(false)

        useEffect(()=>{
        axios.get("http://localhost:8000/api/students")
        .then(res => {
            console.log('*************')
            console.log(res)
            console.log('*************')
            setAllNinjas(res.data.results)
        })
        .catch(err=> console.log (err))

    }, [deleteClicked]);


    const deleteProd = (e, id) =>{
        console.log('delete ninja number = ', id)
        axios.delete(`http://localhost:8000/api/students/delete/${id}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                setDeleteClicked(!deleteClicked)
            
            })
            .catch(err=> console.log (err))
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Ninjas</h3>
                    {allNinjas.filter(ninja => ninja.numberOfBelts === 0 ).map((ninja, i)=>{
                        return <div key={i} className="card">
                            <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninja/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                                <p>Graduation Date: {ninja.graduation_date}</p>
                                <p>Number of belts: {ninja.numberOfBelts}</p>
                                <button><Link to={`/edit/${ninja._id}`}>Edit Ninja</Link></button>
                                <button onClick={(e)=>deleteProd(e, ninja._id)} >Delete Ninja</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col">
                    <h3>Samurai</h3>
                    {allNinjas.filter(ninja => ninja.numberOfBelts >0 && ninja.numberOfBelts <3).map((ninja, i)=>{
                        return <div key={i} className="card">
                            <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninja/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                                <p>Graduation Date: {ninja.graduation_date}</p>
                                <p>Number of belts: {ninja.numberOfBelts}</p>
                                <button><Link to={`/edit/${ninja._id}`}>Edit Ninja</Link></button>
                                <button onClick={(e)=>deleteProd(e, ninja._id)} >Delete Ninja</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col">
                    <h3>Sensei</h3>
                    {allNinjas.filter(ninja => ninja.numberOfBelts === 3 ).map((ninja, i)=>{
                        return <div key={i} className="card">
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`/ninja/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                                <p>Graduation Date: {ninja.graduation_date}</p>
                                <p>Number of belts: {ninja.numberOfBelts}</p>
                                <button><Link to={`/edit/${ninja._id}`}>Edit Ninja</Link></button>
                                <button onClick={(e)=>deleteProd(e, ninja._id)} >Delete Ninja</button>
                            </div>
                        </div>
                    })}
                </div>
                
            </div>
        </div>
    );
};

export default AllNinjas;