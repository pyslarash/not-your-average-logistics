import React from "react";

function TripData() {
    return (
        <>
            {/* Start City */}
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                type="text"
                placeholder="Start City"
            />
            {/* Destination City */}
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                type="text"
                placeholder="Destination City"
            />
            {/* Driving Time */}
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                type="text"
                placeholder="Driving Time"
            />
            {/* Average MPG */}
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                type="text"
                placeholder="Average MPG"
            />
            {/* Total Miles */}
            <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                type="text"
                placeholder="Total Miles"
            />
            {/* Notes */}
            <textarea
                id="notes"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your notes here"
            ></textarea>
        </>
    )
}

export default TripData;