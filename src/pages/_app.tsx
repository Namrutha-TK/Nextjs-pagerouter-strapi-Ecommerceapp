// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from '@/context/CartContext';
import Layout from "../components/Layout/Layout";
import "@/styles/globals.css";
// import 'bootstrap-icons/font/bootstrap-icon.css'

export default function App({ Component, pageProps }:AppProps) {
  return(
    <>
     <CartProvider>
    <Layout> 
   <Component {...pageProps} />
    </Layout> 
    </CartProvider>
   </>
  );
}
