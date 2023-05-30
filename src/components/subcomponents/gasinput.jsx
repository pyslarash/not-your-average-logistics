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
                    placeholder="Gas Price (local currency)"
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
                <div class="flex">
                    <input
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                        type="text"
                        placeholder="Gas Station ZIP"
                    />
                    <select
                        class="block w-1/10 appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-500 px-4 py-2 leading-tight"
                    >
                        <option>US</option>
                        <option>CA</option>
                        <option>MX</option>
                    </select>
                </div>
            </div>
            <button
                className="p-2 items-center rounded-full button-style"
                onClick={handleAddGasInfo}
            >
                <strong className="font-semibold">Add Receipt</strong>
            </button>
        </>
    );
}

export default GasInput;
