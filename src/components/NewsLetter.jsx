import React from 'react';
import newsletterIcon from "../assets/newsletter.png";

function NewsLetter() {
  return (
    <section className="px-6 py-10 md:px-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-white">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className='mb-4 md:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
              Get our weekly NewsLetter
            </h2>

            <p className='mb-6 md:mb-8 text-sm sm:text-base md:text-lg text-gray-300'>
              Get weekly updates on the newest design stories, case studies and tips right in your mailbox. 
              <span className="block mt-2 font-semibold text-[#00ADB5]">Subscribe now!</span>
            </p>

            <div className="join w-full max-w-md mx-auto md:mx-0 shadow-lg">
              <input 
                className="input join-item w-full bg-[#393e46] border-none focus:outline-none text-white px-4" 
                placeholder="Email address" 
              />
              <button className="btn btn-primary join-item px-6 sm:px-8 font-bold border-none transition-transform active:scale-95">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
         <div className="left flex-1 space-y-6">
                   
                   
                   <div className="relative">
                     <img 
                       src={newsletterIcon} 
                       alt="Contact Illustration" 
                       className="w-full max-w-sm object-contain"
                     />
                   </div>
                 </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter;