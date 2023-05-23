import React from "react";

function GasList({ gasList }) {
    const calculateTotalGasPrice = () => {
        return gasList.reduce((total, gasInfo) => total + gasInfo.price, 0);
    };

    return (
        <>
            <ul className="mt-4">
                {gasList.map((gasInfo, index) => (
                    <li key={index}>{gasInfo.price}</li>
                ))}
            </ul>
            <div className="mt-4">
                Total Gas Price: {calculateTotalGasPrice().toFixed(2)}
            </div>
        </>
    );
}

export default GasList;
