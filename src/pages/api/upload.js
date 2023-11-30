// pages/api/upload.js

import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), "./public/uploads");
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];

        try {
            // Use async/await to handle each file rename operation
            for (const file of uploadedFiles) {
                const filePath = file.filepath;
                const originalFileName = file.originalFilename;
                const fileExtension = path.extname(originalFileName);
                const newFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}${fileExtension}`;
                const newFilePath = path.join(form.uploadDir, newFileName);

                await fs.rename(filePath, newFilePath);
            }
            res.status(200).json({ message: `${uploadedFiles.length} files uploaded successfully` });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error processing files' });
        }
    });
}
