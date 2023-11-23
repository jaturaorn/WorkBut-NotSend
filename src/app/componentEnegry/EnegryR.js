"use client";

import { useState } from "react";

// datePicker
import DatePicker from "react-datepicker";

// CSS - datePicker
import "react-datepicker/dist/react-datepicker.css";

import EnegryRsub from "./EnegryRsub";

const EnegryR = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      className="w-[860px] h-[300px] shadow-lg flex p-2 
border border-slate-300 bg-white mt-2"
    >
      <div className="flex flex-col w-full h-full gap-y-1.5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#9C9EB2] text-sm">Yesterday PR</p>
            <p className="text-2xl font-semibold text-[#1946BA]">000.00 %</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#9C9EB2] text-sm">Plant Availability</p>
            <p className="text-2xl font-semibold text-[#1946BA]">000.00 %</p>
          </div>
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
        <EnegryRsub />
      </div>
    </div>
  );
};

export default EnegryR;
