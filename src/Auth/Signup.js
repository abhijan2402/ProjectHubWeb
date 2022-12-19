import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  doc, setDoc  } from "firebase/firestore";
import { auth , db } from "../firebase";
import { Link } from 'react-router-dom'
import EmailValidate from "../validators/EmailValidation";
import PasswordValidate from '../validators/PasswordValidation';
import { useNavigate } from "react-router-dom";
import './Signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=()=>{
    const [userName,setUserName]=useState('');
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    let navigate = useNavigate();
    const validateUser=()=>{
        try {
            if(userName==="")
                throw "Please enter UserName";
            if(email==="")
                throw "Please enter Email";
            if(password==="")
                throw "Please enter Password";
            if(!EmailValidate(email)){
                throw "Please enter a valid Email"
            }
            if(!PasswordValidate(password)){
                throw "Please enter a valid Password (Must Contains Capital Letter,Special Character and a Number)"
            }
            createNewUser();
        } catch (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark",
            });
        }
    }
    const createNewUser = async () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userRef = doc(db, 'Users', user.uid)
            setDoc(userRef,{
                name:userName,
                email:email
            })
            .catch((e)=>{
                toast.error('Something Went Wrong', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "dark",
                });
            })
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/email-already-in-use":
                    toast.error("Email Already Exists", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        theme: "dark",
                    });
                    break;
                default:
                    break;
            }
        }); 
    }

    return (
        <>
            <div style={{ 
                display: 'flex',
                alignItems: "center", 
                height:"100vh",
                width:'100%',
                backgroundColor:"rgba(255, 147, 39, 0.407)"
            }}
            >
                <div className='main-container'>
                    <div className='title-container'>
                        <img
                            src={AppLogo}
                            className='app-logo-image'
                            alt=''
                        />
                        <h1>Welcome Back to</h1>
                        <h1 style={{ color: "#FF7A00" }}>Project Hub</h1>
                        <p className='page-title'>Please SignUp to enter Project Hub</p>
                    </div>
                    <div className='input-field-container'>
                        <p className='input-label'>Username</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setUserName(event.target.value) } 
                            placeholder="UserName"
                        
                        />
                        <p className='input-label'>Email</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setemail(event.target.value) } 
                            placeholder="Email"
                        
                        />
                        <p className='input-label'>Password</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setpassword(event.target.value) } 
                            placeholder="Password"
                        />
                        <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between",width:"90%" }}>
                            <input type={"checkbox"} className="check-box" />
                            <p className='input-label' >Remember Me</p>
                        </div>
                        <button className='custon-button' onClick={validateUser}
                            style={{
                                backgroundColor:"#FF7A00",
                                borderWidth:2,
                                borderColor:"#FF7A00",
                                color:"white"
                            }}
                        >
                            SignUp
                        </button>
                        <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>
                            <button className='custon-button' 
                                style={{
                                    backgroundColor:"transparent",
                                    borderWidth:2,
                                    borderColor:"#FF7A00",
                                    color:"#FF7A00"
                                }}
                            >
                            Login
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );


}

export default Signup;
