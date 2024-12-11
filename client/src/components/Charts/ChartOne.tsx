import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#ba68c8', '#81c784', '#93C5FD', '#FCA5A5'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#ba68c8', '#81c784', '#93C5FD', '#FCA5A5'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 15,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'IT',
        data: [5, 8, 6, 7, 9, 4, 6, 8, 7, 5, 6, 7],
      },
      {
        name: 'Marketing',
        data: [4, 6, 5, 7, 8, 5, 7, 6, 8, 7, 6, 5],
      },
      {
        name: 'HR',
        data: [3, 4, 5, 6, 7, 5, 6, 7, 5, 6, 4, 5],
      },
      {
        name: 'Finance',
        data: [6, 7, 5, 8, 6, 7, 5, 6, 7, 8, 6, 7],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="">
        <h4 className="text-xl font-semibold text-black dark:text-white">
            Leave Applications Statistics
          </h4>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-3 sm:gap-5 sm:flex-row lg:flex-row md:flex-wrap">
          <div className="flex min-w-47.5">
        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
          <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-purple-300"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-purple-300">IT</p>
          {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
        </div>
          </div>
          <div className="flex min-w-47.5">
        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
          <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-green-300"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-green-300">Marketing</p>
          {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
        </div>
          </div>
          <div className="flex min-w-47.5">
        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
          <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-blue-300"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-blue-300">HR</p>
          {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
        </div>
          </div>
          <div className="flex min-w-47.5">
        <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
          <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-red-300"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-red-300">Finance</p>
          {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
        </div>
          </div>
        </div>
    </div>
  );
};

export default ChartOne;
