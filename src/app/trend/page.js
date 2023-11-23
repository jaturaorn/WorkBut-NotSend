"use client";

import { useState } from "react";

import Layout from "../component/layout";

// datePicker
import DatePicker from "react-datepicker";

// CSS - datePicker
import "react-datepicker/dist/react-datepicker.css";

import LineChart from "../component/Chart/LineChart";

const page = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Layout>
      <div className="flex justify-start ml-[165px]">
        <div
          className="w-[1350px] h-screen shadow-lg flex p-2 
border border-slate-300 bg-white mt-2"
        >
          <div className="flex flex-col w-full h-full gap-y-1.5">
            <div className="flex justify-end">
              <div className="flex gap-1 items-center">
                <button className="btn btn-primary">Day</button>
                <button className="btn btn-neutral">Week</button>
                <button className="btn btn-neutral">Month</button>
                <button className="btn btn-neutral">Year</button>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="p-2 btn btn-ghost"
                />
                <button className="btn btn-primary">ok</button>
              </div>
            </div>
            <div
              className="m-auto w-full max-sm:w-[355px] 
            max-sm:h-[200px] max-lg:w-[750px]"
            >
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
