import { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAuth, signOut } from "firebase/auth";
import TitleContainer from '../components/HomeTitle';
import '../css/Home.css';
import reviewpic from '../../Assets/reviewpic.png';
import { ContextData } from '../../App';
import HashLoader from "react-spinners/HashLoader";
import HomePage from '../../Assets/HomePage.jpg';
import { Link } from 'react-router-dom';

function Home() {
  // where ever we want to user current authnticated user info
  // import context and use like below
  const { userUid, getAutherUserDetails } = useContext(ContextData);
  const [bar, setbar] = useState(true)
  useEffect(() => {
    console.log(userUid);
    setTimeout(() => {
      setbar(false)
    }, 1000);
  }, [])
  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("logOut")
      getAutherUserDetails(null)
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      {
        bar ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", height: "100%", marginTop: "10%" }}>
          <HashLoader
            color="orange"
            loading="true"
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div> : <>
          {/* <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", }}>
            <button className='logout-button' onClick={logOut}>LogOut</button>
          </div> */}
          {/* <div className='title-main-container'>
            <div className='main-div'>
              <h1 className='title-header'>Projects that you Love</h1>
              <button className='start-button'>Get in Touch</button>
            </div>
            <img
              src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
              className='title-image'
              alt=''
            />
          </div> */}
          <div className='title-main-container'>
            <div className='All_Div'>

              <img
                src={HomePage}
                className='title-image'
                alt=''
              />
            </div>
            <div className='Button_border'>
              <div className='AllBtn'>
                <button className='logout-button'><Link className='LinkingBtn' to="contact">
                  Call Us
                </Link></button>

              </div>
              <div className='AllBtn'>
                <button className='logout-button' onClick={logOut}>Logout</button>
              </div>
            </div>
          </div>
          <TitleContainer title="Categories" />
          <div className='item-card-container'>
            <Card title="Website" imageLink="https://sites.udel.edu/njimenez/files/2018/05/how-to-create-a-website-feature-image-e1496943224192-1yzdyp6.jpg" />
            <Card title="App" imageLink="https://www.webhopers.com/wp-content/uploads/2022/02/app-development-company-haridwar.jpeg" />
            <Card title="Portfolio" imageLink="https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg?w=2000" />
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            width: '100%',
            flexDirection: 'row',
            justifyContent: "space-around",
            marginBottom: 20
          }}>
            <div className='query-box' >
              <TitleContainer title="Query ?" />
              <img
                src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
                className='query-image'
                alt=''
              />
              <div className='query-buttons-div'>
                <Link to={'contact'}>
                  <button className='query-button-1'>Contact Us</button>
                </Link>
                <button className='query-button-2'>Mail Us</button>
              </div>
            </div>
            <div className='review-div' >
              <h1 className='review-title'>Customer Reviews</h1>
              <img
                src={reviewpic}
                className='review-image'
                alt=''
              />
            </div>
          </div>
        </>
      }

    </>
  );
}
export default Home