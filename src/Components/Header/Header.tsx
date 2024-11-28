import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='bg-[#2E96E6] w-full opacity-25 fixed '>
        <div className='flex items-center justify-between z-999 text-white py-7 w-[90%] mx-auto'>
            <h1 className=''>ViVACExpress</h1>
            <div className='flex items-center'>
                <Link href='#'>Sign up</Link>
                <Link href='#' className='ml-7'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Header