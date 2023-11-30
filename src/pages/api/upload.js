import { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req, res) {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), "./public/uploads");
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }

        try {
            const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
            for (const file of uploadedFiles) {
                const filePath = file.filepath;
                const originalFileName = file.originalFilename;
                const fileExtension = path.extname(originalFileName);
                const newFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}${fileExtension}`;
                const newFilePath = path.join(form.uploadDir, newFileName);

                await fs.rename(filePath, newFilePath);
            }
            return res.status(200).json({ message: `${uploadedFiles.length} files uploaded successfully` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error processing files' });
        }
    });
}
