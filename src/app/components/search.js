export default function Search() {
    return (
        <div className="mt-4">
            <input type="text" placeholder="From" className="p-2 border border-gray-300 rounded-md mr-2" />
            <input type="text" placeholder="To" className="p-2 border border-gray-300 rounded-md mr-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
        </div>
    )
}
