import React from 'react'
import ContactusImg from "../assets/Icon (1).png"

function Contactus() {
  return (
    <div className="p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text and Image */}
        <div className="left flex-1 space-y-6">
          
          
          <div className="relative">
            <img 
              src={ContactusImg} 
              alt="Contact Illustration" 
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="right flex-1 bg-[#222327] p-8 rounded-2xl shadow-xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
           Send Us a Message.  
          </h2>
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Your name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-[#393e46] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Your email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#393e46] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#00ADB5] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Message</label>
              <textarea 
                rows="5" 
                placeholder="Message" 
                className="w-full bg-[#393e46] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#00ADB5] outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary hover:bg-[#393e46] text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              Send Message
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contactus;