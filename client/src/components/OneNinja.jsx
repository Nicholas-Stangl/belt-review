import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios'

const OneNinja = (props) => {

    const [ninjaInfo, setNinjaInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.studentID}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setNinjaInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);

    const deleteProd = (e, id) =>{
        console.log('delete product number = ', id)
        axios.delete(`http://localhost:8000/api/students/delete/${props.studentID}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                navigate("/")
            
            })
            .catch(err=> console.log (err))
    }





    return (
        <div>
            <div className="container">
            <h1>Who Dat Ninja?</h1>
            <div className="card-body">
                                <h4 className="card-title">{ninjaInfo.first_name} {ninjaInfo.last_name}</h4>
                                <p>Graduation Date: {ninjaInfo.graduation_date}</p>
                                <p>Number of belts: {ninjaInfo.numberOfBelts}</p>
                                <p>Veteran Status: {ninjaInfo.isVeteran? "Is a Veteran.": "Not a Veteran."}</p>
                            </div>
                            <button><Link to={`/edit/${ninjaInfo._id}`}>Edit Ninja</Link></button>
                            <br/>
                            <br/>
                            <button onClick={(e)=>deleteProd(e, ninjaInfo._id)} >Delete Product</button>
            </div>
        </div>
    );
};


export default OneNinja;