import React from 'react'
import Image from 'next/image'

const WhyUs = () => {
  return (
    
     <section className="py-16 px-4 md:px-16 bg-white">
     <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
       <div>
         <Image 
           src="/images/worker-site.jpg" 
           alt="Worker at construction site" 
           width={500} 
           height={500} 
           className="w-full"
         />
       </div>
       <div>
         <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
         <p className="text-gray-700 mb-4">
           Choose Raw Source Pro for superior quality, unwavering reliability, and customer satisfaction.
         </p>
         <p className="text-gray-700">
           We source premium raw materials, ensure strict quality control and deliver on time. Your success is our priority.
         </p>
       </div>
     </div>
   </section>
  )
}

export default WhyUs