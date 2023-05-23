import React, { useState } from "react";

function GasInput({ addGasInfo }) {
    const [gasPrice, setGasPrice] = useState('');
    const [gasType, setGasType] = useState('');
    const [gasStationName, setGasStationName] = useState('');
    const [gasStationAddress, setGasStationAddress] = useState('');

    const handleGasPriceChange = (e) => {
        setGasPrice(e.target.value);
    };

    const handleGasTypeChange = (e) => {
        setGasType(e.target.value);
    };

    const handleGasStationNameChange = (e) => {
        setGasStationName(e.target.value);
    };

    const handleGasStationAddressChange = (e) => {
        setGasStationAddress(e.target.value);
    };

    const handleAddGasInfo = () => {
        if (gasPrice.trim() === '') return;

        const gasInfo = {
            price: parseFloat(gasPrice),
            type: gasType,
            stationName: gasStationName,
            stationAddress: gasStationAddress,
        };

        addGasInfo(gasInfo);

        setGasPrice('');
        setGasType('');
        setGasStationName('');
        setGasStationAddress('');
    };

    return (
        <>
            <div className="mb-4">
                <input
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Gas Price"
                    value={gasPrice}
                    onChange={handleGasPriceChange}
                />
                <input
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Gas Type"
                    value={gasType}
                    onChange={handleGasTypeChange}
                />
                <input
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Gas Station Name"
                    value={gasStationName}
                    onChange={handleGasStationNameChange}
                />
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Gas Station Address"
                    value={gasStationAddress}
                    onChange={handleGasStationAddressChange}
                />
            </div>
            <button
                className="px-4 py-1 items-center text-white bg-green-500 rounded-full hover:bg-green-600"
                onClick={handleAddGasInfo}
            >
                <h2 className="text-2xl font-semibold">+</h2>
            </button>
        </>
    );
}

export default GasInput;
