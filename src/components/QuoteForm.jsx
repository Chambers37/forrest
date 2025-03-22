import { useState } from "react";

export default function QuoteForm() {

  const [submitStatus, setSubmitStatus] = useState('idle')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email.')
      }

      setFormData({
        firstName: "",
        lastName: "",
        city: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });

      setSubmitStatus('sent');
      setTimeout(() => setSubmitStatus('idle'), 3000)

    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Failed to send email.");
      setSubmitStatus('idle');
    }
  };

  

  return (
    <section id="quote-form" className="grid grid-cols-1 md:grid-cols-2 p-7 py-[9vh]">

        <div className="grid items-center bg-greenWhite fade-hidden w-full justify-center">
          <div className="mx-auto max-w-[680px] text-center">
            <p className="text-center text-darkGreen text-5xl md:text-6xl md:pb-10">
            Contact us today <br /> to create your <br /> dream outdoor <br /> living space!</p>
            <p className="text-center text-darkGreen text-xl px-10 md:px-20 py-4 md:pb-20">Let us know some information about you and the project or area you are looking to transform. We will reach out to you shortly & we look forward to working with you!
            </p>
          </div>
        </div>
        
        {/*Quote Form*/}
        <div className="bg-greenWhite fade-hidden flex w-full mx-auto p-3 items-center justify-center">

          <form onSubmit={handleSubmit} className="max-w-lg w-full text-2xl grid grid-cols-1 md:grid-cols-2 gap-7 m-5 md:m-10">
            
            <div>
              <label htmlFor="first-name" className="text-darkGreen">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
                value={formData.firstName}
                onChange={handleChange}
              />        
            </div>
              
            <div>
              <label htmlFor="last-name" className="text-darkGreen">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
                value={formData.lastName}
                onChange={handleChange}
              />        
            </div>
          
            <div>
              <label htmlFor="city" className="text-darkGreen">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                value={formData.city}
                onChange={handleChange}
              />        
            </div>

            <div>
              <label htmlFor="Email" className="text-darkGreen">
                Email *
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
                value={formData.email}
                onChange={handleChange}
              />        
            </div>
          
            <div>
              <label htmlFor="Phone" className="text-darkGreen">
                Phone
              </label>
              <input
                type="tel"
                id="Phone"
                name="phone"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                value={formData.phone}
                onChange={handleChange}
                />        
            </div>

            <div>
              <label htmlFor="service" className="text-darkGreen">
                Type of Service *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="transition duration-300 border-darkGreen hover:bg-white focus:outline-none focus:border-b-2 border-b-2 bg-greenWhite mt-1 w-full focus:bg-white focus:self-center focus:mr-auto text-sm p-2"
                required
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="" disabled>-Please Choose One-</option>
                <option value="Patios">Patios</option>   
                <option value="Walkways">Walkways</option> 
                <option value="Pool Decks">Pool Decks</option> 
                <option value="Outdoor Living Space">Outdoor Living Space</option> 
                <option value="Landscape Design">Landscape Design</option> 
                <option value="New Plant Installations">New Plant Installations</option> 
                <option value="Drainage Solutions">Drainage Solutions</option>            
                <option value="Property Maintenance">Property Maintenance</option>            
                <option value="Seasonal Services">Seasonal Services</option>            
              </select>        
            </div>

            <div className="grid col-span-1 md:col-span-2">
              <label htmlFor="Phone" className="text-darkGreen">
                Please Tell Us About Your Project
              </label>
              <textarea 
                name="message" 
                placeholder="Write your message here" 
                className="hover:bg-white mt-2 h-[15vh] bg-transparent border-2 border-solid transition duration-300 border-darkGreen p-2 text-sm"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <button 
                type="submit"
                className="mt-10 hover:bg-lightGreen rounded-full bg-darkGreen hover:text-black text-white transition duration-400 w-full p-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? 'Sending...' : 
                submitStatus === 'sent' ? 'Sent!' : 'Submit'}
              </button>
            </div>
            
          </form>

        </div>

      </section>
  )
}