import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
//Auth pages
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
//other pages
import Home from "./Home/pages/Home";
import Services from "./Services/pages/Services";
import ResponsiveAppBar from "./Home/components/Nav";
import Contact from './Contact/Pages/Contact'
import Feedback from "./Feedback/Pages/Feedback";
import OrderPage from "./OrderPage/OrderPage";
import Cart from "./Cart/Cart";
import Address from "./Address/Address";
import ForgotPassword from "./Auth/ForgotPassword";

export const ContextData = React.createContext();
function App() {
  const [userUid, setUserUid] = useState(null);
  const [userEmail, setUserEmail] = useState(null)
  useEffect(() => {
    getAutherUserDetails();
  }, []);
  async function getAutherUserDetails(userValue) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email
        setUserUid(uid);
        setUserEmail(email)
      } else {
        console.log("User Not Authenticated")
        setUserUid(userValue);
      }
    });
  }
  return (


    <>

      {
        !userUid ?
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Routes> :
          <div className="App">
            <div style={{ padding: 10 }}>
              <ResponsiveAppBar />
            </div>
            {
              userUid &&
              <ContextData.Provider value={{
                userUid: userUid,
                setUserUid: setUserUid,
                userEmail: userEmail,
                setUserEmail: setUserEmail

              }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="service" element={<Services />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="Feedback" element={<Feedback />} />
                  <Route path="OrderPage" element={<OrderPage />} />
                  <Route path="Cart" element={<Cart />} />
                  <Route path="Address" element={<Address />} />
                </Routes>
              </ContextData.Provider>
            }
          </div>
      }


    </>
  );
}
export default App