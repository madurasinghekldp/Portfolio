import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src='/images/portfolio-logo.png' width={60} height={60} alt='logo' className='border border-none rounded-full'/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer