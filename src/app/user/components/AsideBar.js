const AsideBar = ({ isAsideVisible }) => {
    return (
        <aside className={`${isAsideVisible ? 'w-64' : 'w-25'} h-screen bg-gray-900 dark:bg-gray-800 text-white p-5`}>
            <ul>
                <li className="mb-4">Link 1</li>
                <li className="mb-4">Link 2</li>
                <li className="mb-4">Link 3</li>
                {/* Add other links or content here */}
            </ul>
        </aside>
    );
};

export default AsideBar;
