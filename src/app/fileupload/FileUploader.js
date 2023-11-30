"use client"
export default function Home() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        // Handle the response here
        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="file" multiple />
            <button type="submit">Upload File</button>
        </form>
    );
}
