import React from 'react'



const testimonials = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      author: 'Name Surname',
      company: 'Position, Company name',
      rating: 3,
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      author: 'Name Surname',
      company: 'Position, Company name',
      rating: 5,
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
      author: 'Name Surname',
      company: 'Position, Company name',
      rating: 5,
    },
  ];


const Testimonials = () => {
  return (
   
    <section className="py-16 mt-[220px] px-4 md:px-16 bg-white">
    <div className="container mx-auto">
      <h2 className="flex justify-center text-[40px] font-[400] leading-12 font-display mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 border border-black">
            <div className="flex mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-black font-sans font-[400] text-[18px] mb-6">{testimonial.content}</p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-[600] font-sans text-base ">{testimonial.author}</p>
                <p className="font-[400] font-sans text-base">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials