import React, { useState } from "react";
import TripData from "./subcomponents/tripdata";
import GasInput from "./subcomponents/gasinput";
import GasList from "./subcomponents/gaslist";

function Input() {
  const [gasList, setGasList] = useState([]);

  const addGasInfo = (gasInfo) => {
    setGasList((prevList) => [...prevList, gasInfo]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6">
      <div className="md:col-span-1">
        <h2 className="mb-4 text-2xl font-semibold">Trip Data</h2>
        {/* Render the TripData component */}
        <div className="flex flex-col">
          <TripData />
        </div>
      </div>
      <div className="md:col-span-1">
        <h2 className="mb-4 text-2xl font-semibold">Gas Data</h2>
        {/* Render the GasInput component and pass the addGasInfo function as a prop */}
        <div className="flex flex-col">
          <GasInput addGasInfo={addGasInfo} />
        </div>
      </div>
      <div className="md:col-span-1">
        <h2 className="mb-4 text-2xl font-semibold">Gas List</h2>
        {/* Render the GasList component and pass the gasList state as a prop */}
        <div className="flex flex-col">
          <GasList gasList={gasList} />
        </div>
      </div>
    </div>

  );
}

export default Input;
