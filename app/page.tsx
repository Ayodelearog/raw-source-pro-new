// File: pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import ProductCategories from './components/ProductCategories';

const Home: FC = () => {
  

 
 
  return (
    <main className="flex flex-col min-h-screen p-5 bg-white">
      <div className='w-full '>

      <Header />
      </div>
      <Hero />
      <WhoWeAre />
      <ProductCategories />
      
    </main>
  );
};

export default Home;
