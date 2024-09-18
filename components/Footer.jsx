import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#674636] w-screen h-auto">

      <div id="copyright" className=" flex flex-col sm:gap-y-4 sm:py-10 xs:gap-y-2 xs:py-6 gap-y-1 py-3 items-center">
        <div className="font-lato text-[#FFF8E8] flex gap-x-4 sm:regular-14  regular-12 underline">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="font-opensans md:regular-18 sm:regular-16 regular-14 text-[#FFF8E8]">
          <span>© 2024 Adora. The Visual Vault. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer