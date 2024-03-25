"use client"
import { Inter } from "next/font/google";
import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import pt from '../lang/pt.json';
import en from '../lang/en.json';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [lang, setLang] = useState('pt');

  function changeLang(value){
      setLang(value)
  }

  const data = lang === 'pt' ? pt : en;
  
  return (
    <html lang={data}>
      <body className={inter.className}>
        <Header changeLang={changeLang} navigationBar={data.navigationBar}/>
        {children}
        <Footer className="sticky bottom-0 text-gray-600 body-font"/>
      </body>
    </html>
  );
}
