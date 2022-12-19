import React, { useEffect, useState ,useContext} from 'react'
import TitleContainer from '../Home/components/HomeTitle';
import { doc, collection, query, where, getDocs,deleteDoc,updateDoc  } from "firebase/firestore"; 
import {db} from '../firebase'
import './Card.css';
import HashLoader from "react-spinners/HashLoader";
import { ContextData } from '../App';
const Cart = () => {
    const { userUid } = useContext(ContextData);
    const [loading,setLoading]=useState(false)
    const [cardOrder,setCardOrder]=useState([]);
    useEffect(()=>{
        getOrderData()
    },[])

    const getOrderData=()=>{
        setLoading(true);
        let resultArray=[];
        let conditinoOne=where("UserUid", "==", userUid);
        let conditionTwo=where("request", "==", 'Added');
        const baseQuery = query(collection(db,"Orders"),conditinoOne,conditionTwo);
        getDocs(baseQuery).then((res)=>{
            res.forEach((item)=>{
                resultArray.push({id:item.id,...item.data()});
            })
            setCardOrder(resultArray);
            setLoading(false);
        })
    }
    const deleteAddedProjectFromCart=async(addedProject)=>{
        if(loading){
            console.log("Clicked");
            return;
        }
        try {
            setLoading(true)
            await deleteDoc(doc(db, "Orders", addedProject.id));
            getOrderData();
            setLoading(false);           
        } catch (error) {
            console.log(error);
        }
    }
    const updateItemStatus=async(projectdetails)=>{
        if(loading){
            console.log("Clicked");
            return;
        }
        try {
            setLoading(true);
            const dbRef = doc(db, "Orders", projectdetails.id);
            await updateDoc(dbRef, {
                request: "pending"
            });
            console.log("Updated");
            getOrderData();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);           
        }
    }
    return (
        <>
            {
                loading?
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", height: "100%", marginTop: "10%" }}>
                    <HashLoader
                        color="orange"
                        loading="true"
                        size={200}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>:
                <>
                    <TitleContainer title="Your Cart"/>
                    <div style={{width:"100%",display:'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
                    {
                        cardOrder.length===0?null:
                        cardOrder.map((item)=>(
                            <div className='item-card'>
                                <img
                                    src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg"
                                    alt="web"
                                    className='Image'
                                />
                                <div className='info-container'>
                                    <div className='title-div'>
                                        <h1>{item.projectType}</h1>
                                        {/* <button className='edit-button'>edit</button> */}
                                    </div>
                                    <div className='items-all'>
                                        <p className='title'>Tech</p>
                                        <div className='main-values'>
                                            <div className='items'>
                                                {
                                                    item.projectTech.map((value)=>(
                                                        <>
                                                            <h4 className='item-label'>{value}</h4>
                                                        </>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='items'>
                                            <div>
                                                <h4 className='item-label'>{item.price}</h4>
                                                <p className='other-title'>Price</p>
                                            </div>
                                            <div>
                                                <h4 className='item-label'>{item.duration}</h4>
                                                <p className='other-title'>Duration</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btn-div'>
                                        <button className='request-button' onClick={()=>updateItemStatus(item)}>{item.request}</button>
                                        <button className='cancel-button' onClick={()=>deleteAddedProjectFromCart(item)} >cancel</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </>
            }
        </>
    )
}

export default Cart