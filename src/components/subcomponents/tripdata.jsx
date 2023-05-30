import React from "react";

function TripData() {
    return (
        <>
            {/* Start ZIP */}
            <div class="flex mb-4">
                <input
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                    type="text"
                    placeholder="Start ZIP"
                />
                <select
                    class="block w-1/10 appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-500 px-4 py-2 leading-tight"
                >
                    <option>US</option>
                    <option>CA</option>
                    <option>MX</option>
                </select>
            </div>
            {/* Start Day/Time */}
            <div class="flex mb-4">
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                    type="date"
                />
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="time"
                />
            </div>
            {/* Destination ZIP */}
            <div class="flex mb-4">
                <input
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                    type="text"
                    placeholder="Destination ZIP"
                />
                <select
                    class="block w-1/10 appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-500 px-4 py-2 leading-tight"
                >
                    <option>US</option>
                    <option>CA</option>
                    <option>MX</option>
                </select>
            </div>
            {/* Destination Day/Time */}
            <div class="flex mb-4">
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                    type="date"
                />
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="time"
                />
            </div>
            {/* Driving Time */}
            <div class="flex mb-4">
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mr-2"
                    type="number"
                    min="0"
                    placeholder="Hours"
                />
                <input
                    class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ml-2"
                    type="number"
                    min="0"
                    max="59"
                    placeholder="Minutes"
                />
            </div>

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