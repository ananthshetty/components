import React, { useState } from 'react'
import Cards from './Cards';
import walletData from './data.json';

export default function OverlappedCardsAnimation() {
  const [topCardStyle, setTopCardStyle] =       useState(false);
  const [bottomCardStyle, setBottomCardStyle] = useState(false);

  const handleNext = ()=>{
    setTopCardStyle(!topCardStyle);
    setBottomCardStyle(!bottomCardStyle);
  }
  const handleBack = ()=>{
    setTopCardStyle(!topCardStyle);
    setBottomCardStyle(!bottomCardStyle);
  }

  // const cardBlueStyle =
  //   'translate-y-[0px] duration-550 ease-in absolute top-[25px] h-[234px] flex flex-col rounded-[15px] px-[15px] py-[15px] gap-[41px] w-[386px] z-[5]';
  // const cardOrangeStyle =
  //   'translate-y-[22px] transition duration-1000 ease-out mx-[10px] absolute top-[18px] h-[234px] flex flex-col rounded-[15px] px-[15px] py-[15px] gap-[41px] w-[366px] z-[4]';
  return (
    <>
        <div className='relative flex items-center justify-center w-full h-full'>
            <div className='w-[424px] h-[340px] flex items-center justify-centerrelative p-[10px] border-[3px]'>
                <Cards walletData={walletData.walletData} handleBack={handleBack} handleNext={handleNext} topCardStyle={topCardStyle} bottomCardStyle={bottomCardStyle}/>
            </div>
        </div>
    </>
  )
}
