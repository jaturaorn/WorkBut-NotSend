const AlarmSub3 = () => {
  return (
    <div>
      <div className="flex justify-start mt-11 max-sm:pb-3">
        <p>Showing 0 to 0 of 0 entries</p>
      </div>
      <div className="flex justify-end max-sm:justify-center">
        <div
          className="inline-flex justify-end rounded-md shadow-sm"
          role="group"
        >
          <button
            type="button"
            className="px-2 py-2 text-sm font-medium text-gray-900 bg-transparent 
        border border-gray-900 rounded-l-lg hover:bg-gray-900 bg-[#FFFFFF]
        hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
        focus:bg-gray-900 focus:text-white"
          >
            Previous
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 
        bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 
        hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
        focus:bg-gray-900 focus:text-white bg-[#FFFFFF]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlarmSub3;
