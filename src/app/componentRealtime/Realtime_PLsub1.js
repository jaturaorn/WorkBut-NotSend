const Realtime_PLsub1 = () => {
  return (
    <div className="flex justify-between p-1.5">
      <div className="flex gap-x-2 items-center">
        <p className="text-sm">This month</p>
        <p className="font-bold text-3xl text-white">0.00</p>
        <p className="text-sm">(MWh)</p>
      </div>
      <div className="divider divider-horizontal divider-neutral"></div>
      <div className="flex gap-x-2 items-center">
        <p className="text-sm">Today</p>
        <p className="font-bold text-3xl text-white">0.00</p>
        <p className="text-sm">(kWh)</p>
      </div>
    </div>
  );
};

export default Realtime_PLsub1;
