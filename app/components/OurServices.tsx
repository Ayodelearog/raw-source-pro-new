import React from 'react'
import Image from 'next/image'

const services = [
    { name: 'Custom Materials', image: '/images/custom-materials.jpg' },
    { name: 'Logistics', image: '/images/logistics.jpg' },
    { name: 'Consultant Support', image: '/images/consultant.jpg' },
    { name: 'Bulk Order Discounts', image: '/images/bulk-order.jpg' },
    { name: 'Technical Support', image: '/images/technical-support.jpg' },
  ];


const OurServices = () => {
  return (
   
    <section className="py-16 px-4 md:px-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden">
            <Image 
              src={service.image} 
              alt={service.name} 
              width={250} 
              height={300} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-center font-semibold px-2 uppercase text-sm md:text-base">
                {service.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurServices