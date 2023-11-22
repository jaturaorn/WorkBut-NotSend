import EnegryL from "./EnegryL";
import EnegryR from "./EnegryR";

const Enegry = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col w-full mt-3">
        <h3>Energy Consumption</h3>
        <EnegryL />
      </div>
      <div className="flex flex-col w-full mt-3">
        <h3>Plant Performance</h3>
        <EnegryR />
      </div>
    </div>
  );
};

export default Enegry;
