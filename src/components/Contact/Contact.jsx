import React, { useState,useEffect } from 'react';

import ContactIcons from './ContactIcons';
import { use } from 'react';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [btnText, setBtnText] = useState('Submit');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let btnResponse;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending....');
    try {
      const response = await fetch('https://formspree.io/f/mjkgrgaq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setBtnText('send sucessfully');
        setFormData({ name: "", email: "", message: "" });
        btnResponse = true; 
      } else {
        setBtnText("Failed. Try Again");
        btnResponse = true;
      }
    } catch (error) {
      setBtnText("Error. Try Again");
      console.error(error);
    }
    setTimeout(() => setBtnText("Submit"), 2000)
  };

  const [isVisible,setvisible]=useState(false);

  useEffect(()=>{
    setvisible(true);
  },[]);

  return (
    <div className={`relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0 fade-in ${isVisible ? 'fade-in-active' : ''}`}>
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-white">
                Fill in the form to start a conversation
              </p>
              <div className={`flex items-center mt-8 text-white fade-in ${isVisible ? 'fade-in-active' : ''}`}>
                <ContactIcons />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold 
                  focus:border-purple-700 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold 
                  focus:border-purple-700 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold 
                  focus:border-purple-700 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`md:w-32 text-white font-bold py-3 px-6 rounded-lg mt-3 
                  transition ease-in-out duration-300 
                  ${btnText === "Failed. Try Again" ? "bg-red-500 hover:bg-red-600" : 
                    btnResponse ? "bg-green-500 hover:bg-green-700" : "bg-purple-500 hover:bg-purple-700"}`}
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
