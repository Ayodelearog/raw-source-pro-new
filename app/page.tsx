import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import ProductCategories from './components/ProductCategories';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import OurServices from './components/OurServices';

const Home: FC = () => {
  

 
 
  return (
    <main className="flex flex-col min-h-screen p-5 bg-white relative">
      <div className='w-full sticky z-10 '>

      <Header />
      </div>
      <Hero />
      <WhoWeAre />
      <ProductCategories />
      <WhyUs />
      <Testimonials />
      <OurServices />
      
    </main>
  );
};

export default Home;
