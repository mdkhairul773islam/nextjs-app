import React from 'react'

export default function Button({ loading, buttonName }) {

    return (
        <div className="flex items-center justify-between">
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                {buttonName == 'Register' ? loading ? 'Please Wait Registration Processing...' : 'Register' : loading ? 'Please Wait Login...' : buttonName}
            </button>
        </div>
    )
}
