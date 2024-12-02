import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`container-fluid  p-0  mb-5 ${style.footer}`}>
            
    <div className={`container-fluid  m-0 mb-5 ${style.footer_content}`}>
    <div className='container '>
    <div className="sub2">
        <div className={` gap-4 ${style.subLists}`}>
            <div className={`colSub ${style. get_know} `}>
                <li className={`${style.heading}`}>Get to Know Us</li>
                <li className={`${style.subLi}`}><a href="#" className={`text-light ${style.text}`} >About Us</a>
                    </li>
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Careers</a>
                   </li>
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Press Releases</a>
                    </li>
               
            </div>
            <div className={`${style.colSub} ${style.connect}`}>
                <li className={`${style.heading}`}>Connect with Us</li>
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Facebook</a>
                    </li>
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Twitter</a>
                   </li>
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Instagram</a>
                   </li>
            </div>
            <div className='colSub  p-4'>
                <li className={`${style.heading}`}>Make Money with Us</li>
                <li className={`${style.subLi}`}>
                <a href='#' className={`text-light ${style.text}`}>Sell On Dmart</a>
               </li>
                <li className={`  ${style.subLi}`}><a href='#' className={`text-light ${style.text}`}>Sell under Dmart Accelerator</a>
                 </li>
                <li className={`${style.subLi}`}>
                <a href='#' className={`text-light  ${style.text}`}>Protect and Build Your Brand</a>
                   </li>
                
                <li className={`${style.subLi}`}>
                    <a href='#' className={`text-light ${style.text}`}>Advertise Your Products</a>
                    </li>
                
             </div>
             
                 <div className='colSub mt-4'>
                    <li className={`${style.heading}`}>Let Us Help You </li>
                  
                    <li className={`${style.subLi}`}> 
                        <a href='#' className={`text-light ${style.text}`} style={{listStyle:'none'}}>Your Account</a>
                        </li>
                    <li className={`${style.subLi}`}>
                        <a href='#' className={`text-light ${style.text}`}>Returns Center</a>
                        </li>
                    <li className={`${style.subLi}`}>
                        <a href='#' className={`text-light ${style.text}`}>Recalls and Product Safety Alerts</a>
                    </li>
                    <li className={`${style.subLi}`}>
                        <a href='#' className={`text-light ${style.text}`}>100% Purchase Protection</a>
                    </li>
                  
                    <li className={`${style.subLi}`}>
                        <a href='#' className={`text-light ${style.text}`}>Help</a>
                     </li>
                        
                 </div>
        </div>
        
    </div>
    </div>
    <div className='row'>
    <div className="copy_right">
      <p className='text-white mt-5 text-center mb-5'>Copyright &copy; 2023 Dmart.All rights reserved</p>
</div>
    </div>
    </div>


</div>
  )
}
