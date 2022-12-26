import { DashboardDateRangeModal } from 'Components/Molecules/DateRangeModal/DateRangeModal';
import React from 'react';
import styles from './ReminderCard.module.scss';
const rData = [
  {
    rDate: '16 Oct',
    rTitle: 'Home EMI',
    rDescription: 'For the month of Oct',
    rPrice: '1550.00',
    txnType: 'Dr'
  },
  {
    rDate: '20 Oct',
    rTitle: 'Car EMI',
    rDescription: 'For the month of Oct',
    rPrice: '650.00',
    txnType: 'Cr'
  },
  {
    rDate: '25 Oct',
    rTitle: 'SIP',
    rDescription: 'Frankline Managed Income',
    rPrice: '350.00',
    txnType: 'Dr'
  },
  {
    rDate: '28 Oct',
    rTitle: 'Bike EMI',
    rDescription: 'For the month of Oct',
    rPrice: '120.00',
    txnType: 'Cr'
  }
];
export default function ReminderCard() {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-[#ffff] rounded-[15px]">
        {/* reminder-header-container */}
        <div className="flex items-center justify-center w-full pb-[10px]">
          <span className="text-[20px] font-medium text-ibm3 leading-[30px]">{`Remainders`}</span>
        </div>
        {/* reminder-rows-container */}
        <div className="bg-[#ffff] w-full h-[185px] flex flex-col overflow-auto">
          {/* rows:- r as reminder ex: rDate */}
          {rData?.map((item, index) => {
            return (
              <>
                <Rows
                  key={index}
                  rDate={item.rDate}
                  rTitle={item.rTitle}
                  rDescription={item.rDescription}
                  rPrice={item.rPrice}
                  txnType={item.txnType}
                  onClick={(e) => {
                    window.alert('Pay');
                  }}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Rows({
  rDate,
  rTitle,
  rDescription,
  rPrice,
  txnType,
  onClick
}) {
  return (
    <>
      <div className="max-h-[66px] min-h-[66px] flex">
        <div className="w-[75px] flex justify-center items-center">
          <span className="text-[#000000] text-[13px] font-normal">
            {rDate}
          </span>
        </div>
        <div
          className={`rowDetailsCard w-[290px] h-full flex relative justify-between`}
        >
          <div className="left-0 flex items-center h-full border-l-[2px] border-l-[#B4B4B4] reltaive">
            <div
              className={`absolute left-[-6px] rounded-[100%] w-[13px] h-[13px] flex items-center justify-center bg-[#295D934D]`}
            >
              <span
                className={`rounded-[100%] w-[9px] h-[9px] ${
                  txnType === 'Cr' ? 'bg-[#295D93]' : 'bg-[#EA7625]'
                }`}
              ></span>
            </div>
          </div>
          <div className="w-[280px] ml-[9px] flex justify-center items-center">
            <div
              className={`relative left-[3px] w-[15px] h-[15px] rotate-45 rounded-[2px] z-[3] ${
                txnType === 'Cr' ? 'bg-[#295D93]' : 'bg-[#EA7625]'
              }`}
            ></div>
            {/* rowDetailsCard*/}
            <div
              className={`relative left-[-5px] z-[2] rounded-[5px] w-full h-[56px] flex flex-col justify-center p-[10px]
                  gap-[10px] text-[#FFFFFF]
                   ${txnType === 'Cr' ? 'bg-[#295D93]' : 'bg-[#EA7625]'} ${
                styles.rowDetailsCard
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[13px] font-light">{rTitle}</span>
                <span className="text-[10px] h-full font-normal flex items-end">
                  ${`${rPrice}`}&nbsp;{txnType}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[13px] font-light">{rDescription}</span>
                <span
                  className="text-[10px] font-normal text-cwhite cursor-pointer"
                  onClick={onClick}
                >
                  Pay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
