'use client'

import { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    goal: '',
    date: '',
    budget: '',
    email: '',
    details: '',
    privacyPolicy: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="mx-auto pt-10 pl-14 pr-14 pb-20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-[6.7vh] font-font1 leading-[9vh] tracking-wide">
          Hi! My name is 
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[23vw] mx-2 border-b placeholder:text-[2.3vh] placeholder:tracking-tight  placeholder:text-center text-lg text-center border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder="Enter your name*"
          /> 
          and I work with 
          <input 
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-[22vw] mx-2 placeholder:text-lg placeholder:text-center  placeholder:text-[2.3vh] placeholder:tracking-tight  text-center text-lg border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder="Company name type here"
          />
          < br/>
          I'm looking for a partner to help me with 
          <input 
            type="text"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="w-[31vw] mx-2 placeholder:text-lg placeholder:text-center text-center text-lg border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder="Your goal type here*"
          />
          With an idea of having that completed
          <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className=" w-[34vw] mx-2 placeholder:text-lg placeholder:text-center text-center text-lg  placeholder:text-[2.3vh] placeholder:tracking-tight border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder='Date*'
          />
          You can reach me at 
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" w-[22.5vw] mx-2 border-b placeholder:text-[2.3vh] placeholder:tracking-tight  placeholder:text-center text-lg text-center border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder="name@example.com"
          /> 
          to start the conversation.
          Optionally, i’m sharing more:
          <input 
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            className=" w-[48vw] mx-2 placeholder:text-lg placeholder:text-center text-center text-lg  placeholder:text-[2.3vh] placeholder:tracking-tight border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent"
            placeholder="Product details type here..."
          />
        </div>
        <div className='flex pt-2 justify-end items-center'>
        <div className="mt-4 mr-[2.5vw]">
          <input
            type="checkbox"
            id="privacy"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className="rounded border-gray-300 text-gray-600 focus:ring-gray-500"
          />
          <label htmlFor="privacy" className="tracking-tight text-[2.2vh] ml-2  font-font1">
            I agree with the <a href="#" className=" underline">Privacy Policy</a>
          </label>
        </div>
        <button 
        type="submit"
        className='px-6 flex gap-10 items-center py-4 mt-3 tracking-tight rounded-full text-white uppercase  bg-gray-500 hover:bg-black   transition duration-300 ease-in-out '>SEND INQUIRY
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button> 
        </div>
      </form>
    </div>
  )
}
