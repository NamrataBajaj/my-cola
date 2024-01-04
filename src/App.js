// // import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Company from './Company/Company';
import Brand from './Brand/Brand';
import Sustainbility from './Sustainbility/Sustainbility';
import Social from './Social/Social';
import Carrer from './Carrer/Carrer';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// import Portfolio from './Portfolio/Portfolio';
// import Login from './login/login';
//  import Register from './register/register';

function App() {
  return (
    <>
   <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='' element={<Home />} />
         <Route path='/company' element={<Company/>}/>
          <Route path='/brand' element={ <Brand/>} />
          <Route path='/sustainbility' element={<Sustainbility />} />
          <Route path='/social' element={<Social />} />
          <Route path='/carrer' element={<Carrer />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    
       {/* <Home/>  */}
      {/* <Company/> */}
      {/* <Brand/>
      <Sustainbility/>
      <Social/>
      <Carrer/>  */}
      {/* <Footer/> */}

      
     

    {/* <Portfolio/> */}
    {/* <Login/> */}
      {/* <Register/> */}
    </>
  );
}

export default App;
