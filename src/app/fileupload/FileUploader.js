"use client"
import { useState } from 'react';

export default function FileUploader() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        // Handle the response here
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-6">
            <input
                type="file"
                onChange={handleFileChange}
                className="mb-4"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Upload File
            </button>
        </form>
    );
}
