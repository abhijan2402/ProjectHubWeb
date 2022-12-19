import React, { useState } from 'react'
import './Auth.css'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppLogo from '../Assets/AppLogo.png';

function ForgotPassword() {
    const [email, setemail] = useState('')
    const [Link, setLink] = useState(false)
    const ResetLink = async () => {
        if(Link)
            return ;
        try {
            if(email==='')
                throw "Enter Email";
            setLink(true);
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("link sent successfully (Also Check Spam)", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "light",
                });
                setemail("")
                setLink(false);
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/user-not-found":
                        toast.error("User not Exists", {
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
                        toast.error("SomeThing Went Wrong", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: false,
                            theme: "dark",
                        });
                        break;
                }
                setLink(false);
            });
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
            setLink(false);
        }
    }
    return (
        <div style={{ backgroundColor: "rgba(255, 147, 39, 0.407)"}}>
            <div className='main-container_1'>
                <img
                    src={AppLogo}
                    style={{width:200,height:200,borderRadius:10}}
                />
                <p className='page-title'>Please enter your email of Project Hub</p>
                <input 
                    style={{
                        width:342,
                        height:40,
                        borderRadius:5,
                        borderColor:"orange",
                        fontWeight:"bold",
                        paddingLeft:10
                    }}
                    type={"text"} 
                    onChange={(event) => { setemail(event.target.value) }} 
                    placeholder="Email"
                />                   
                <button 
                    style={{
                        width:350,
                        height:40
                    }}
                    className='custon-button_1' 
                    onClick={ResetLink}
                >
                    {Link?"Sending Email":'Send Link'}
                </button>
            </div >
            <ToastContainer />
        </div>
    )
}

export default ForgotPassword