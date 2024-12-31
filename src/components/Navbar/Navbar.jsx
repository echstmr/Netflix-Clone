import React from 'react'
import data from '../../assets/data/data.json'

const Navbar = () => {
  return (
    <div className='bg-transparent'>
        {/* Navbar */}
        <div className='container mx-auto flex items-center justify-between py-10 px-3 md:px-8 bg-transparent'>
            {/* Netflix Logo */}
            <div>
                <img src={data.Navbar.logo} alt={data.Navbar.alt} width={140} className='cursor-pointer'/>
            </div>
            {/* Navbar Buttons */}
            <div className='flex items-center gap-5'>
                <select name="language" id="language"
                 className='p-1 bg-transparent border border border-gray-300 text-white rounded-sm'>
                    <option value={data.Navbar.language1}>English</option>
                    <option value={data.Navbar.language2}>Tagalog</option>
                </select>

                <button className='w-[120px] h-[42px] font-semibold text-white 
                rounded-sm bg-red-700 hover:bg-red-800' >Sign Up</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
