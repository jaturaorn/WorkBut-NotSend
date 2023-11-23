const AlarmSub1 = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-start">
        <p className="text-lg font-bold">Show</p>
        <select className="outline outline-1">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <p className="text-lg font-bold">entries</p>
      </div>
      <div className="flex space-x-2 justify-end mb-5 mt-3 max-sm:justify-start">
        <p>Search:</p>
        <input type="text" className="outline outline-1" />
      </div>
    </div>
  );
};

export default AlarmSub1;
