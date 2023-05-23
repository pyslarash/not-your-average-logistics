import React from "react";

function GasList({ gasList }) {
    const calculateTotalGasPrice = () => {
        return gasList.reduce((total, gasInfo) => total + gasInfo.price, 0);
    };

    return (
        <>
            <div className="m-4">
                <strong>Total Gas Price: {calculateTotalGasPrice().toFixed(2)}</strong>
            </div>
            <div class="bg-white shadow-md p-4 rounded-lg">

                <ul className="mt-4">
                    {gasList.map((gasInfo, index) => (
                        <li key={index}>{gasInfo.price}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default GasList;
