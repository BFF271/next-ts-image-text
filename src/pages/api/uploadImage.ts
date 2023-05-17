
import { IncomingForm } from 'formidable';
import sizeOf from 'image-size';

var mv = require('mv');

const HOST_URL = process.env.NEXTAUTH_URL + (process.env.NEXTAUTH_URL.endsWith(`/`) ? `` : `/`);

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            if (!files.file.mimetype.startsWith('image/')) return reject(new Error('Not an Image.'));
            var oldPath = files.file.filepath;
            var newPath = `./public/uploads/${files.file.originalFilename}`;
            mv(oldPath, newPath, function (err) { });
            const dimensions = sizeOf(oldPath);
            res.status(200).json({ url: HOST_URL + `uploads/${files.file.originalFilename}`, type: files.file.mimetype, height: dimensions.height + '', width: dimensions.width + '' })
        })
    })
};