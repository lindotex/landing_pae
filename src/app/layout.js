"use client"
import { Inter } from "next/font/google";
import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import pt from '../lang/pt.json';
import en from '../lang/en.json';
import "./globals.css";
import useLanguageSwitcher from "@/controllers/useLanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [lang, setLang] = useLanguageSwitcher();
  const data = lang === 'pt' ? pt : en;

  function changeLang(value){
      setLang(value)
  }

  function language(){
    return console.log(lang)
  }
  
  return (
    <html lang={data}>
      <body className={inter.className} language={language}>
        <Header changeLang={changeLang} navigationBar={data.navigationBar}/>
        {children}
        <Footer className="sticky bottom-0 text-gray-600 body-font"/>
      </body>
    </html>
  );
}
