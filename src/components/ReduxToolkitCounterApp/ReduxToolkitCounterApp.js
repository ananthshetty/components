import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../../store/slices/counter';

export default function ReduxToolkitCounterApp() {
    const count = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    const incre = ()=> dispatch(increament(20));
    const decre = ()=> dispatch(decreament(20));

    return (
    <div className='flex flex-col gap-10'>
        <div className='flex flex-col '>
            <h2>counter app - reduxjs/toolkit</h2>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <p className='text-center'>coutner value: {count}</p>
            <button type="button" onClick={incre} className='border-2 border-[#000] rounded-[10px] px-2 py-1 text-[#fff] bg-[#ccc]'>increase by 10</button>
            <button type="button" onClick={decre} className='border-2 border-[#000] rounded-[10px] px-2 py-1 text-[#fff] bg-[#ccc]'>decrease by 10</button>
        </div>
    </div>
  )
}
