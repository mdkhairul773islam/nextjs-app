import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false, // Disabling the default body parser
    },
};

export default async function handler(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'Error parsing the file' });
            return;
        }
        // Process the file here
        res.status(200).json({ message: 'File uploaded successfully' });
    });
}
