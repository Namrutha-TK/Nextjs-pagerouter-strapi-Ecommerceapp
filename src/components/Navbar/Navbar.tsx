'use client';
import React from 'react';
import { useEffect,useState } from 'react';
import Link from 'next/link';
import  {MerchantService} from '../../services/Merchant_Service'

export default  function Navbar() {
   
    console.log("Header");
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        
        const fetchLogoUrl = async () => {
            try {
              const  logo = await MerchantService.getMerchant(); 
                console.log("logo",logo);
                 setLogoUrl(logo); 
            } catch (error) {
                console.error('Error fetching logo URL:', error);
            }
        };
        fetchLogoUrl(); 
    }, [])
   
  return (
    
      <div className='container-fluid m-0 p-0 bg-dark'>
    
  
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      <a className="navbar-brand text-light ml-5 pl-5" href="#">
           <img src={logoUrl} alt="Logo" width="60" height="50" className="d-inline-block ml-5" /> 
          &nbsp;Dmart
        </a>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link href={"/"} className="nav-link text-light fs-5 ml-5" aria-current="page" >Home</Link>
    
            </li>
            <li className="nav-item">
              <Link href={"/products"} className="nav-link text-light fs-5 ml-4" >Products</Link>
              
            </li>
            <li className="nav-item">
            <Link href={"/about_us"} className="nav-link text-light fs-5" >About Us</Link>
             
            </li>
            <li className="nav-item">
            <Link href={"/contact_us"} className="nav-link text-light fs-5" >Contact Us</Link>
      
            </li>
            <li className="nav-item">
            <Link href={"/cart"} className="nav-link text-light fs-5" >Cart
            {/* <i className="bi bi-cart3"></i> */}
            </Link>
      
            </li>
            
          </ul>
        </div>
      </div>
    </nav> 
          </div> 
  )
}
