import React from 'react'

export const OurJourney = () => {
  return (
    <div className='flex flex-col md:flex-row relative px-10 bg-gradient-to-r from-primary to-accent text-white py-10 gap-10 mt-5'>
        <div className='flex flex-1 flex-col'>
            <h2 className='text-2xl font-semibold'>Our Journey</h2>
            <p>Founded in 2025, Next Store was built by a passionate team of designers, developers, and dreamers who wanted to make stylish living accessible to everyone.
                 We&rsquo;re proud to be 100% digital, eco-conscious, and always evolving with our customers&rsquo; needs.</p>
        </div>
        <div className='bg-white w-[2px] h-[100px] top-15 right-4 absolute left-1/2 hidden md:flex '></div>
        <div className='flex flex-1 flex-col'>
            <h2 className='text-2xl font-semibold'>What Makes Us Different?</h2>
            <ul>
                <li>1. Curated Collections: We handpick every item, ensuring quality and style.</li>
                <li>2. Sustainable Choices: We prioritize eco-friendly materials and practices.</li>
                <li>3. Customer-Centric: Your feedback shapes our offerings.</li>
                <li>4. Affordable Luxury: Quality doesn&rsquo;t have to break the bank.</li>
            </ul>
        </div>
    </div>
  )
}
