import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6 space-x-20'>

        {/* Search */}
        <div className='flex flex-row w=3/4 items-center justify-center space-x-4'>

            {/* Search Bar */}
            <input type="text" className='text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase' placeholder='Search for city.....'/>

            {/* Search Icon */}
            <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>

            {/* Search by location */}
            <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
        </div>

        {/* Temperature Conversion */}
        <div className='flex flex-row items-center justify-center w=1/4'>

            {/* Celcius */}
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>

            {/* Fahrenheit */}
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Inputs