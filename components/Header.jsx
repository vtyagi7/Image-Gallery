import React from 'react'
import Image from 'next/image'
import Images from './Images'

const Header = () => {
  return (
        <div id="home" className=" w-screen h-auto bg-fixed bg-[url('/header4.png')]  bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center " >
            <div className='flex md:flex-row flex-col items-center justify-center pb-2 gap-2 xs:gap-1 box-border'>
                <Image className='p-6' src="/logo.png" alt="logo" width={250} height={250}/>
                <div className='w-auto h-auto  backdrop-blur-[14px] md:border-l-2  border-white ml-4 mr-4 md:mt-4 mb-4 pb-4'>
                    <div id='heading-box' className='md:pl-[20px] md:pt-[40px] md:mb-[24px] md:pr-[20px] xxs:pl-[4px] xxs:pt-[4px] xxs:pr-[4px]'>
                        <text className='font-playfair xl:bold-64 lg:bold-52 md:bold-40 sm:bold-35 xs:bold-28 bold-24 text-[#FFF8E8]'>ADORA: The Visual Vault !</text>
                    </div>
                    <div id='text-box' className='md:pl-[20px] md:pr-[10px] xxs:pl-[4px]  xxs:pr-[4px] '>
                        <text id='details' className='font-playfair xl:regular-20 lg:regular-18 md:regular-16 sm:regular-14 xs:regular-12 regular-12   text-[#F2F2F2]'> A curated collection of stunning images, stored securely and elegantly displayed for easy exploration, offering a visual treasure trove for viewers. It's a space where every image is treated as a valuable asset, locked safely within a beautifully designed vault of creativity.</text>
                    </div>
                </div>
            </div>
            <Images/>
        </div>
  )
}

export default Header