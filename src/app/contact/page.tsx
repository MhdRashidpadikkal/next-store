import React from 'react'

export default function Contact() {
  return (
    <div className='mt-25 mb-10 flex  sm:px-20 justify-center items-center  '>
        
        <div className='flex flex-col justify-center items-center lg:w-1/2 h-[500px] bg-white px-5 rounded-lg '>
            <h2 className='text-2xl md:text-3xl font-semibold'>Contact Next Store</h2>
            <p className='mt-1 px-5'>Have questions or need support? We&rsquo;re here to help! Fill out the form or reach out directly — the Next Store team will get back to you shortly.</p>
        
            <form 
            className='flex flex-col gap-3 w-full px-14 mt-5  '
        >
            <input name="name" type="text" placeholder='enter your name'  className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <input name="email" type="email" placeholder='email address' className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <textarea name="message" placeholder='your message' className='border border-[#a88c6a] px-2 rounded-md py-1 focus:outline-none focus:border-[#d4af7f]  focus:ring-1 focus:ring-[#d4af7f] ' />
            <button type="submit"
                className='bg-black text-white rounded-2xl cursor-pointer mt-2 py-1'
            >Send Message</button>
        </form>
        </div>

       
    </div>
  )
}
