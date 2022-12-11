import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './KeenSliderComp.css';


export default function KeenSliderComp() {
    const [arrayObject, setArrayObject] = useState(
        [
            {
                labelHeading: 'Heading / Title - 1',
                labelOneName: "label's value",
                labelTwoName: "label's value",
              },
              {
                labelHeading: 'Heading / Title - 2',
                labelOneName: "label's value",
                labelTwoName: "label's value",
              },
              {
                labelHeading: 'Heading / Title - 3',
                labelOneName: "label's value",
                labelTwoName: "label's value",
              }
          ]
    );
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      vertical: true
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      }
    ]
  );
  return (
    <>
      <div ref={sliderRef} className="max-w-[400px] min-h-[145px] max-h-[145px] keen-slider">
        {arrayObject?.map((item, index) => {
          return (
            <div
              key={index}
              className="keen-slider__slide rounded-[8px] bg-teal-600 text-white border px-3 flex flex-col justify-center w-full gap-[8px]"
            >
              <div className='border-b '>
                <span className="text-[20px] leading-[27px]">
                  {item.labelHeading}
                </span>
              </div>
              <div className="border-b flex w-full text-[20px] leading-[27px]">
                <span className="text-ibm2">LabelName:</span>
                &nbsp;
                <span className="text-ibgn1">{item.labelOneName}:</span>
              </div>
              <div className="border-b flex w-full text-[20px] leading-[27px]">
                <span className="text-ibm1">LabelName:</span>
                &nbsp;
                <span className="text-ibgn1">{item.labelTwoName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

KeenSliderComp.propTypes = {
  arrayObject: PropTypes.shape({
    map: PropTypes.func
  })
};
