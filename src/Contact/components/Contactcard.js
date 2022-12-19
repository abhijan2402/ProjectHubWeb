import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
function Contactcard() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [desc, setDesc] = useState('')
    const [mobile, setMobile] = useState("")
    const SubmitQuery = async () => {
        if (fname === "" && lname === "" && desc === "" && mobile === "") {
            console.log("enter all the field please")
        }
        else {
            try {
                console.log(fname)
                console.log(lname)
                console.log(desc)
                console.log(mobile)
                await addDoc(collection(db, "UserQuery"), {
                    FName: fname,
                    LName: lname,
                    MobileNumber: mobile,
                    ProjectDesc: desc
                }).then((docRef) => {
                    console.log(docRef.id)
                }).catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className='Main-div'>
            <h2>React out to Us</h2>
            <p>We will connect you shortly one you fill the form</p>
            <div>
                <input className='input-form' onChange={(event) => setFname(event.target.value)} type='text' placeholder="Firstname" /><br />
                <input className='input-form' onChange={(event) => setLname(event.target.value)} type='text' placeholder="LastName" /><br />
                <input className='input-form' onChange={(event) => setMobile(event.target.value)} type='tel' placeholder="Mobile Number" /><br />
                <input className='input-form' onChange={(event) => setDesc(event.target.value)} type='text' style={{ padding: "50px 10px", height: "40px" }} placeholder="Any idea of the project" /><br />
            </div>
            <button className='Submit-btn' onClick={SubmitQuery}>Submit</button>
        </div>
    )
}

export default Contactcard