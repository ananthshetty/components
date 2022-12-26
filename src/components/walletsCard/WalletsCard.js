import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../CustomerWalletDashboard.module.scss';
import walletData from './data.json';
import arrowBlue from 'Assets/Images/arrow-right-ibaas.svg';
import { MultiColorIcon } from 'Components/Atoms';

export default function WalletsCard() {
  const [state, setState] = useState(false);
  const [index, setIndex] = useState(0);

  const decrementFunc = () => {
    if (index === 0) {
      setIndex(walletData.length - 1);
    } else {
      setIndex(index - 1);
    }
    setState(!state);
  };

  const incrementFunc = () => {
    if (index === walletData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setState(!state);
  };

  const cardBlueStyle = `translate-y-[5px] transition duration-300 ease-out absolute top-[25px] z-[4] w-[374px] h-[221px] flex flex-col rounded-[15px] px-[15px] py-[15px] gap-[37px] mx-[5px]`;
  const cardOrangeStyle = `translate-y-[27px] transition duration-300 ease-out mx-[0px] absolute top-[18px] z-[5] w-[378px] h-[221px] flex flex-col rounded-[15px] px-[15px] py-[15px] gap-[37px]`;

  return (
    <div
      className={`relative max-w-[100%] flex flex-col justify-center items-center cursor-pointer`}
    >
      {/* Arrow buttons */}
      <div className="relative flex items-center justify-center w-full h-[296px] mt-[5px]">
        <button
          onClick={() => {
            decrementFunc();
          }}
          className="cursor-pointer z-[5] absolute top-[-13px] flex items-center justify-center px-[20px]"
        >
          <img
            src={arrowBlue}
            alt="rightButton"
            className={`${styles.leftFacedBtn} rotate-[-90deg] w-[22px] h-[36px]`}
          />
        </button>

        <button
          onClick={() => {
            incrementFunc();
          }}
          className="cursor-pointer z-[5] absolute bottom-[-4px] flex items-center justify-center px-[20px]"
        >
          <img
            src={arrowBlue}
            alt="rightButton"
            className={`${styles.leftFacedBtn} rotate-90 w-[22px] h-[36px]`}
          />
        </button>
      </div>

      {/* Cards-container */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* card-1 */}
        <div
          className={`${styles.cardOrange} ${
            state ? cardBlueStyle : cardOrangeStyle
          }`}
        >
          <div className="flex justify-end w-full">
            <div className="flex items-center justify-between w-full text-cwhite">
              <span className="flex items-center justify-center">
                <MultiColorIcon icon="dollar" />
                &nbsp;iCoin
              </span>
              <span>
                <MultiColorIcon icon="ibaas-logo-white" />
              </span>
            </div>
          </div>
          <div className="relative flex justify-start">
            <div className="relative flex items-center justify-between w-full text-cwhite">
              <span className="flex items-center">e-Wallet</span>
              <span className="relative flex items-center">
                <MultiColorIcon
                  icon="wifi"
                  className="absolute right-0 text-[2rem]"
                />
              </span>
            </div>
          </div>
          <div className="flex justify-start w-full">
            <div className="flex items-center justify-between w-full text-cwhite">
              <span className="text-[20px]">
                XXXX&nbsp;XXXX&nbsp;XXXX&nbsp;
                {(walletData[index]?.walletId).slice(-4)}
              </span>
              {/* <span>{walletData[index]?.walletCategory}</span> */}
            </div>
          </div>
          <div className="flex flex-col w-full relative top-[-23px]">
            <div className="text-cwhite flex items-center justify-center w-full gap-[20px]">
              <span className="text-[8px]">
                VALID
                <br />
                UPTO
              </span>
              <span className="text-[14px]">07{` / `}26</span>
            </div>
            <div className="min-h-[16px] flex items-center justify-start w-full text-cwhite">
              <span></span>
            </div>
            <div className="flex items-center justify-between w-full text-cwhite">
              <span>{walletData[index]?.walletName}</span>
              <span>Master</span>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div
          className={`${styles.cardBlue} ${
            !state ? cardBlueStyle : cardOrangeStyle
          }`}
        >
          <div className="flex justify-end w-full">
            <div className="flex items-center justify-between w-full text-cwhite">
              <span title="Wallet Currency">
                <MultiColorIcon icon="ethereum-white" className="text-[18px]" />
                &nbsp;Etherium
              </span>
              <span>
                <MultiColorIcon icon="ibaas-logo-white" />
              </span>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative flex items-center justify-between w-full text-cwhite">
              <span className="flex items-center">e-Wallet</span>
              <span className="relative flex items-center">
                <MultiColorIcon
                  icon="wifi"
                  className="absolute right-0 text-[2rem]"
                />
              </span>
            </div>
          </div>
          <div className="flex justify-start w-full">
            <div className="flex items-center justify-between w-full text-cwhite">
              <span title="Wallet ID" className="text-[20px]">
                XXXX&nbsp;XXXX&nbsp;XXXX&nbsp;
                {(walletData[index]?.walletId).slice(-4)}
              </span>
              <span title="Wallet Category">
                {/* {walletData[index]?.walletCategory} */}
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full relative top-[-23px]">
            <div className="text-cwhite flex items-center  w-full justify-center gap-[20px]">
              <span className="text-[8px]">
                VALID
                <br />
                UPTO
              </span>
              <span className="text-[14px]">02{` / `}27</span>
            </div>
            <div className="min-h-[16px] flex items-center justify-start w-full text-cwhite">
              <span></span>
            </div>
            <div className="flex items-center justify-between w-full text-cwhite">
              <span title="User Name">{walletData[index]?.walletName}</span>
              <span title="Card Type">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WalletsCard.propTypes = {
  walletData: PropTypes.any
};

export function AdvertisementCard() {
  return (
    <>
      <div>AdvertisementCard</div>
    </>
  );
}
