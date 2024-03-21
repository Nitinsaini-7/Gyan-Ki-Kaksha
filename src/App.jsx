import React from "react";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import './App.css'




function App(){
    return(
        <>
        <div className="app">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </>
    )
}
export default App;
