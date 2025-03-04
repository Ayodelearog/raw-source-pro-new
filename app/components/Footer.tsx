import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-6 md:mb-0">
          <Image 
            src="/images/logo.png" 
            alt="Raw Source Pro" 
            width={150} 
            height={50} 
          />
        </div>
        <div className="flex flex-wrap gap-6 mb-6 md:mb-0 justify-center">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border px-4 py-2 w-full md:w-auto"
            />
            <button className="bg-blue-700 text-white px-4 py-2">Subscribe</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">You will receive updates and special offers.</p>
        </div>
      </div>
      <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">Terms of Service</a>
          <a href="#" className="hover:text-gray-700">Cookie Settings</a>
        </div>
        <p>© 2025 Raw Source. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer