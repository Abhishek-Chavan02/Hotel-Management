import React from 'react'
import './BookButton.css'
function BookButton({ btnText }) {
    return (
        <div>
            <button className='bg-[#5A2360] text-white h-13 w-50 text-center relative custom-border '>{btnText}</button>
        </div>
    )
}

export default BookButton
