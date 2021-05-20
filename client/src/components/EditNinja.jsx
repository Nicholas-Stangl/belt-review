import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditNinja = (props) => {

    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        numberOfBelts: "",
        isVeteran: false
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.studentID}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setFormInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);

    const [errors, setErrors] = useState ({})

    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                isVeteran: !formInfo.isVeteran
            })
        }
        else{
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
        }         
    }



    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.put(`http://localhost:8000/api/students/update/${props.studentID}`, formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                if(res.data.results){
                    navigate(`/ninja/${props.studentID}`)
                }
                else{
                    setErrors(res.data.errors)
                }
            })
            .catch(err=> console.log (err))
    }





    return (
        <div>
            <h1 className="text-center">Edit this Ninja!</h1>
            <br/>
            <br/>

            <form className="col-4 mx-auto" onSubmit={submitHandler}>
                <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input type="text" name="first_name" className="form-control" value={formInfo.first_name} onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.first_name? errors.first_name.message: ""}</p>
                
                <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input type="text" name="last_name" className="form-control" value={formInfo.last_name}  onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.last_name? errors.last_name.message: ""}</p>
                
                <div className="form-group">
                <label htmlFor="">Graduation Date:</label>
                <input type="date" name="graduation_date" className="form-control" value={formInfo.graduation_date}  onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.graduation_date? errors.graduation_date.message: ""}</p>

                <div className="form-group">
                <label htmlFor="">Number of Belts:</label>
                <input type="number" name="numberOfBelts" className="form-control" value={formInfo.numberOfBelts} onChange={changeHandler}/>
                </div>

                <div className="form-check">
                <label htmlFor="">Veteran Status:</label>
                <input type="checkbox" name="isVeteran" checked={formInfo.isVeteran} value={formInfo.isVeteran} className="form-control" onChange={changeHandler}/>
                </div>

                <button type="submit" className="btn btn-success">Update Ninja</button>              
            </form>
            
        </div>
    );
};


export default EditNinja;