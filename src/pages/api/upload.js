// pages/api/upload.js

import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const form = await new IncomingForm();
    form.uploadDir = "./public/uploads";
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const file = files.file[0];
        const filePath = file.filepath;
        const originalFileName = file.originalFilename;
        const fileExtension = path.extname(originalFileName);
        const newFileName = `${Date.now()}${fileExtension}`;
        console.log('files', files, 'filePath', filePath, 'originalFileName', originalFileName, 'fileExtension', fileExtension, 'newFileName', newFileName);

        const newFilePath = path.join(form.uploadDir, newFileName);

        fs.rename(filePath, newFilePath, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ message: 'File uploaded successfully', filePath: `/uploads/${newFileName}` });
        });
    });

}
