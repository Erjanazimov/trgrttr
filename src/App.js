import React, {useEffect} from "react";
import "./global_css/css/style.css";
import "./global_css/css/media.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Router from "./route/Router";
import Authorization from "./components/authorization/Authorization";
import ModalContact from "./components/modalContact/ModalContact";
import InfoBike from "./components/bike/infoBike/InfoBike";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import {useDispatch} from "react-redux";
import {loginChecked} from "./store/authorizationSlice";

function App() {
  const data = localStorage.getItem("token");
  const parse = JSON.parse(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginChecked(parse));
  }, [])



  return (
      <>
    <div className="container-global">
      <Navbar/>
        <Router/>
    </div>
        <Footer/>
          <Authorization/>
          <ModalContact/>
          <InfoBike/>
        <ToastContainer />
      </>
  );
}

export default App;
