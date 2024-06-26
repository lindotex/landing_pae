import React from 'react';
import Feature from "@/app/components/Feature.jsx";
import Brands from './components/Brands.jsx';


export default function Home() {
  
  return (
    <div className='App'>
    <main className="flex min-h-screen flex-col items-center justify-between rounded-b-xl">
      <Feature className="bg-slack-purple"/>
      <Brands/>
    </main>
    </div>
  );
}
