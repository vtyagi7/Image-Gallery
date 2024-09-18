"use client"

import React from 'react'
import {useEffect, useState } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Images = () => {

    const BaseURL = "https://picsum.photos/v2/list";
    const limit=6;
    const [cards, setCards]=useState([]);
    const [page,setPage]=useState(1);

    const callAPI = async (page, limit) => {

        let fetchURL = BaseURL + "?";
        
        if(page) 
          fetchURL+="page="+ page+ "&";
        
        if(limit) {
          fetchURL+="limit="+ limit+ "&";
        }

        console.log(fetchURL);
        let data = await fetch(fetchURL,{
            headers: {
             "Content-Type": "application/json",
           }
           });
        data= await data.json();
        console.log(data);
        if(data.length<=0)
            return;
        setCards(data);
        setPage(page);
        console.log(cards);
        console.log(page);
        };

    useEffect(() => {
        callAPI(page,limit);

    },[])
    function nextHandler(e){
        callAPI(page+1,limit);

    }
    function prevHandler(e){
        if(page<=1){
            return;
        }
        callAPI(page-1,limit);
    }
  return (
    <div>
        <div className='flex flex-col gap-4 container'>

            <div className=' bg-[#AAB396]/50 backdrop-blur-md '>
                    <h2 className='py-2 font-montserrat lg:bold-28 md:bold-28 sm:bold-20 xs:bold-18 xxs:bold-16 text-[#fff] text-center'> Gallery Glimpse </h2>
            </div>

            <div className='px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8  flex flex-col gap-2 xl:gap-x-8'>

                    {cards && cards.map((card) => (
                        <div key={card.id.toString()} className=' flex flex-col items-center justify-center'>
                            <div class="rounded overflow-hidden shadow-lg flex flex-col items-center">
                                <img class="w-64 h-64 border-2 border-[#F7EED3] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:cursor-pointer hover:drop-shadow-2xl " src={card.download_url} alt="" width={200} height={200}/>
                
                            </div>

                            
                        </div>
                        ))}


            </div>

            <div className='flex flex-row  gap-2 pb-4 items-center justify-center'>
                    <button onClick={prevHandler} className="text-white sm:text-base  xxs:text-sm font-montserrat font-bold hover:bg-[#758694] bg-[#AAB396] rounded-full flex flex-row gap-2 items-center justify-center px-4 py-2 ">
                        <GrFormPrevious size={20}/> 
                        <span className=''> Prev </span>
                        
                    </button>
                    <text className="text-white sm:text-base  xxs:text-sm font-montserrat  bg-[#405D72] rounded-full flex flex-row gap-2 items-center justify-center px-4 py-2 "> {page}</text>
                    <button onClick={nextHandler} className="text-white sm:text-base  xxs:text-sm font-montserrat hover:bg-[#758694] bg-[#AAB396]  font-bold rounded-full flex flex-row gap-2 items-center justify-center px-4 py-2 ">
                        <span> Next </span>
                        <GrFormNext size={20}/> 
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Images