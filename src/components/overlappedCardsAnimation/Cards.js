import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './overlappedCardsAnimation.module.scss';

export default function Cards({ walletData,handleNext,handleBack, topCardStyle,bottomCardStyle }) {
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
    <div>
      <button onClick={handleBack}>Back</button>
    </div>
    <div className='relative w-full h-full top-[8px]'>
    <div
      className={`flex flex-col justify-center relative cursor-pointer h-full`}
    >
                {/* card-1 */}
                <div
                    className={`${styles.cardBlue} 
                    ${topCardStyle?'translate-y-[-15px] duration-1000 ease-in w-[400px] z-20':'translate-y-[4px] duration-1000 ease-in w-[390px] mx-[5px] z-10'}
                     h-[233px] absolute text-white rounded-[15px] p-[15px] flex flex-col gap-[26px] `}
                  >
                    <div className="flex justify-end w-full">
                      <div className="text-cwhite">
                        <span>iBaaS</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="text-cwhite">
                        <span>E-Wallet</span>
                      </div>
                    </div>
                    <div className="flex justify-start w-full">
                      <div className="text-cwhite">
                        <span>{walletData[0].walletId}</span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-start w-full text-cwhite">
                        <span>Wallet Name</span>
                      </div>
                      <div className="flex items-center justify-between w-full text-cwhite">
                        <span>{walletData[0].walletName}</span>
                        <span>{walletData[0].walletCategory}</span>
                      </div>
                    </div>
                </div>
                {/* card-2 */}
                <div
                    className={`${styles.cardOrange} 
                    ${bottomCardStyle?'translate-y-[18px] duration-1000 ease-in w-[380px] mx-[10px] z-10':'translate-y-[-15px] duration-1000 ease-in w-[400px] z-20'}
                     h-[233px] absolute text-white rounded-[15px] p-[15px] flex flex-col gap-[26px] `}
                  >
                    <div className="flex justify-end w-full">
                      <div className="text-cwhite">
                        <span>iBaaS</span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="text-cwhite">
                        <span>E-Wallet</span>
                      </div>
                    </div>
                    <div className="flex justify-start w-full">
                      <div className="text-cwhite">
                        <span>{walletData[1].walletId}</span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-start w-full text-cwhite">
                        <span>Wallet Name</span>
                      </div>
                      <div className="flex items-center justify-between w-full text-cwhite">
                        <span>{walletData[1].walletName}</span>
                        <span>{walletData[1].walletCategory}</span>
                      </div>
                    </div>
                </div>
                
    </div>
    </div>
    <div>
        <button onClick={handleNext}>Next</button>
    </div>
    </div>
  );
}

Cards.propTypes = {
  walletData: PropTypes.any
};