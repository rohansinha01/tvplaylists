// import React from 'react'
import assets from '../assets'

const Navbar = () => {
  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img src={assets.left_arrow.png} alt="" />
            </div>
        </div>
    </>
  )
}

export default Navbar