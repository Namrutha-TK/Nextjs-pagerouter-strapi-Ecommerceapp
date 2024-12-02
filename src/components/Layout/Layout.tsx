import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }:any) {
    return (
      <>
         <Navbar /> 
         <main>{children}</main> 
         <Footer /> 
      </>
    )
  }