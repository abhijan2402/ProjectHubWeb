import React, { useContext, useEffect, useState } from 'react'
import '../Feedback/Pages/feedback.css';
import './OrderPage.css'
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ContextData } from '../App';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// where ever we want to user current authnticated user info
// import context and use like below
function OrderPage() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("Orange");
    const { userUid, getAutherUserDetails } = useContext(ContextData);
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(() => {
        getOrderData();
    }, [])

    const getOrderData = () => {
        let resultArray = [];
        let conditinoOne = where("UserUid", "==", userUid);
        const baseQuery = query(collection(db, "Orders"), conditinoOne);
        getDocs(baseQuery).then((res) => {
            res.forEach((item) => {
                resultArray.push({ id: item.id, ...item.data() });
            })
            setOrderDetail(resultArray)
        })
    }
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">OrderPage</button>
            </div>
            {
                orderDetail.length === 0 ?
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", height: "100%", marginTop: "10%" }}>
                        <ClimbingBoxLoader
                            color={color}
                            loading={loading}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div> :
                    orderDetail.map((item) => (
                        <div className='OrderMainPage'>
                            <div className='OrderDetailDiv'>
                                <h3>ProjectType - {item.projectType}</h3>
                                <img alt='' src="https://informationq.com/wp-content/uploads/2018/01/WebPage.jpg" className='OrderImg' />
                            </div>
                            <div className='OrderDetailDiv1'>
                                <h3>{item.projectName}-{item.duration}</h3>
                                <p>{item.description}</p>
                                <div style={{ display: "flex", flexDirection: "row", margin: "auto", width: "auto", textAlign: "center", justifyContent: "center", }}>
                                    {
                                        item.projectTech.map((value) => (
                                            <>
                                                <h3 style={{ textAlign: "center", margin: "2% 5%" }}>{value}</h3>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Price :{item.price}</h3> </div>
                            <div className='OrderDetailDiv' style={{ marginTop: "1.6%" }}><h3>Status-<h4 style={{ color: "green" }}>{item.request}</h4></h3>
                            </div>
                        </div>
                    ))
            }

        </>
    )
}

export default OrderPage