import React from 'react'

function Forecast({title}) {
  return (
    <div>

        {/* Heading */}
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white  font-medium uppercase'>{title}</p>
        </div>

        {/* Horizontal Line */}
        <hr className="my-2" />

        {/* Weather Details */}
        <div className='flex items-center justify-between text-white'>

            {/* Option 1 */}
            <div className='flex flex-col items-center justify-center'>

                {/* Time */}
                <p className='font-light text-sm'>04:30 PM</p>

                {/* Weather Image */}
                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png" className='w-12 my-1' alt="" />

                {/* Temperature */}
                <p className='font-medium'>32°</p>
            </div>

            {/* Option 2 */}
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png" className='w-12 my-1' alt="" />
                <p className='font-medium'>32°</p>
            </div>

            {/* Option 3 */}
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png" className='w-12 my-1' alt="" />
                <p className='font-medium'>32°</p>
            </div>

            {/* Option 4 */}
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png" className='w-12 my-1' alt="" />
                <p className='font-medium'>32°</p>
            </div>

            {/* Option 5 */}
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-512.png" className='w-12 my-1' alt="" />
                <p className='font-medium'>32°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast