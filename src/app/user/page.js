"use client"
import React, { useState } from 'react';
export default function User() {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { origin, destination, departureDate });
    };
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                <h2 className="text-lg font-semibold">Flight Search</h2>
               {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>*/}
            </div>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    {/*<legend className="text-lg font-semibold mb-4">Flight Search</legend>*/}
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <label htmlFor="origin"
                               className="block text-sm font-medium text-gray-600 md:w-1/3 mb-1 md:mb-0">
                            Origin
                        </label>
                        <input type="text" id="origin" name="origin" placeholder="Enter origin"
                               className="mt-1 p-2 w-full border rounded-md md:w-2/3" value={origin}
                               onChange={(e) => setOrigin(e.target.value)}/>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <label htmlFor="destination"
                               className="block text-sm font-medium text-gray-600 md:w-1/3 mb-1 md:mb-0">
                            Destination
                        </label>
                        <input type="text" id="destination" name="destination" placeholder="Enter destination"
                               className="mt-1 p-2 w-full border rounded-md md:w-2/3" value={destination}
                               onChange={(e) => setDestination(e.target.value)}/>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <label htmlFor="departureDate"
                               className="block text-sm font-medium text-gray-600 md:w-1/3 mb-1 md:mb-0">
                            Departure Date
                        </label>
                        <input type="date" id="departureDate" name="departureDate"
                               className="mt-1 p-2 w-full border rounded-md md:w-2/3" value={departureDate}
                               onChange={(e) => setDepartureDate(e.target.value)}/>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                            Search Flights
                        </button>
                    </div>
                </form>
            </div>
            <div className="mt-8 border-t border-gray-300 pt-4">
                <h2 className="text-lg font-semibold">&nbsp;</h2>
            </div>
        </div>
    )
}
