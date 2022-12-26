import React from 'react';
import Chart from 'react-apexcharts';
import './doughnutChart.css';

const data = [
  {
    labelName: 'LabelName1',
    labelValue: '100'
  },
  {
    labelName: 'LabelName2',
    labelValue: '20'
  },
  {
    labelName: 'LabelName3',
    labelValue: '40'
  },
  {
    labelName: 'LabelName4',
    labelValue: '30'
  },
  {
    labelName: 'LabelName5',
    labelValue: '10'
  }
];
const labels = data.map((item) => {
  return item.labelName;
});
const series = data.map((item) => {
  return parseInt(item.labelValue.replace(/,/g, ''));
});
// window.alert(series);
export default function DoughnutChart() {
  const options = {
    // legend false for hiding the labelsContainer section
    legend: {
      show: false
    },
    labels: [...labels],
    colors: ['#001dffc9', '#ffc0cbb5', '#008000bd', '#ffa500bd', '#ff0000a6'],
    plotOptions: {
      pie: {
        donut: {
          size: '45',
          labels: {
            show: true,
            name: {},
            value: {
              fontSize: '28px',
              fontWeight: 'normal'
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '20px',
              color: 'black',
              formatter: function (w) {
                let sum = 0;
                for (let i = 0; i < data.length; i++) {
                  sum += parseInt(data[0].labelValue.replace(/,/g, ''));
                }
                return `$${sum}`;
                // return `$${w.globals.seriesTotals.reduce((a, b) => {
                //   return a + b;
                // })}`;
              }
            }
          }
        }
      }
    },
    dataLabels: {
      position: 'center',
      enabled: true,
      style: {
        fontSize: '18px',
        colors: ['black']
      },
      formatter: function (val) {
        return `${Math.floor(val)}%`;
      },
      dropShadow: {
        enabled: !true
      }
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          `<div ${`background-color: ${
            // colors: ['#001dffc9', '#ffc0cbb5', '#008000bd', '#ffa500bd', '#ff0000a6'],
            seriesIndex === 0
              ? `#001dff70`
              : seriesIndex === 1
              ? `#ffc0cb80`
              : seriesIndex === 2
              ? `#00800075`
              : seriesIndex === 3
              ? `#ffa50080`
              : seriesIndex === 4
              ? `#ff00007a`
              : ''
          }; display:flex; padding:10px 10px;" class="arrow_box_container"`}>` +
          `<div ${`style="width:100%; color:white; border-bottom: 1px solid white; background-color: ${
            seriesIndex === 0
              ? `#001dff70`
              : seriesIndex === 1
              ? `#ffc0cb80`
              : seriesIndex === 2
              ? `#00800075`
              : seriesIndex === 3
              ? `#ffa50080`
              : seriesIndex === 4
              ? `#ff00007a`
              : ''
          }; display:flex; justify-content: space-between;"`} class="arrow_box">` +
          '<span>' +
          w.globals.labels[seriesIndex] +
          ':&nbsp;' +
          '</span>' +
          '<span>' +
          series[seriesIndex] +
          '</span>' +
          '</div>' +
          // Row1
          `<div ${`style="width:100%; padding-top:10px; padding-left:10px; padding-right:10px;  color:white; background-color: ${
            seriesIndex === 0
              ? `#001dff70`
              : seriesIndex === 1
              ? `#ffc0cb80`
              : seriesIndex === 2
              ? `#00800075`
              : seriesIndex === 3
              ? `#ffa50080`
              : seriesIndex === 4
              ? `#ff00007a`
              : ''
          }; display:flex; justify-content: space-between;"`} class="arrow_box">` +
          '<span>' +
          // w.globals.labels[seriesIndex] +
          'subLabelName'+
          ':&nbsp;' +
          '</span>' +
          '<span>' +
          // '$' +
          // series[seriesIndex] +
          'subLabelValue'+
          '</span>' +
          '</div>' +
          // Row2
          `<div ${`style="width:100%; padding: 5px 10px; color:white; background-color: ${
            seriesIndex === 0
              ? `#001dff70`
              : seriesIndex === 1
              ? `#ffc0cb80`
              : seriesIndex === 2
              ? `#00800075`
              : seriesIndex === 3
              ? `#ffa50080`
              : seriesIndex === 4
              ? `#ff00007a`
              : ''
          }; display:flex; justify-content: space-between;"`} class="arrow_box">` +
          '<span>' +
          // w.globals.labels[seriesIndex] +
          'subLabelName'+
          ':&nbsp;' +
          '</span>' +
          '<span>' +
          // '$' +
          // series[seriesIndex] +
          'subLabelValue'+
          '</span>' +
          '</div>' +
          // Rows-End
          '<div>'
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="text-center mb-[20px]">
        <span className="text-[20px] leading-[30px] tracking-[0.32px]">
          Account Summary
        </span>
      </div>
      <div className="flex flex-col mixed-chart">
        <Chart
          options={options}
          series={series}
          type="donut"
          // width="100%"
          // height="500"
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="gap-[10px] text-[14px] font-normal leading-[21px] flex items-center">
                <span
                  className={`${
                    index === 0
                      ? 'bg-[#A6DDA8]'
                      : index === 1
                      ? 'bg-[#31A78F]'
                      : index === 2
                      ? 'bg-[#FF8F8F]'
                      : index === 3
                      ? 'bg-[#EA7625]'
                      : index === 4
                      ? 'bg-[#93C4F6]'
                      : ''
                  } w-[15px] h-[15px] rounded-[100%]`}
                ></span>
                <span>{item.labelName}</span>
              </div>
              <div className="text-[14px] font-normal leading-[21px] flex items-center">
                {item.labelValue}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
