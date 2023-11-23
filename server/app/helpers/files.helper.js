import fs from 'fs';
import util from 'util';
import path, {extname} from 'path';
import {v4 as uuidv4} from 'uuid';
import {v2 as cloudinary} from 'cloudinary';
import DatauriParser from 'datauri/parser';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const parser = new DatauriParser();

const mkdir = util.promisify(fs.mkdir);
const unlink = util.promisify(fs.unlink);

async function uploadFile(file, dirName) {
    const dir = 'files/' + dirName;
    const pathName = `${dir}/${uuidv4() + extname(file.name)}`;

    await mkdir(dir, { recursive: true });

    file.mv(pathName);

    return pathName;
}

async function deleteFile(pathFile) {
    await unlink(pathFile).catch((error) => {
        if (error.code !== 'ENOENT') throw error;
    });

    return true;
}

function checkFileType(file) {
    if (typeof file === 'string') {
        if (/^data:image\/\w+;base64,/.test(file)) {
            return file; // This is an image
        } else if (/^data:application\/pdf;base64,/.test(file)) {
            return file; // This is a PDF
        }
    } else if (file.name && file.data) {
        if (path.extname(file.name).toLowerCase() === '.pdf') {
            // Handle PDF files differently
            return parser.format('.pdf', file.data);
        } else {
            return parser.format(path.extname(file.name).toString(), file.data);
        }
    }
    return null;
}

async function uploadFileCloudinary(file, folder = null, options = {}) {
    const checkFile = checkFileType(file);

    if (checkFile) {
        if (!options.resource_type) {
            options.resource_type = 'auto'; // Default to 'auto' if resource_type is not provided
        }

        return cloudinary.uploader.upload(checkFile, {
            folder: `${process.env.ENV}-${folder}`,
            ...options
        });
    } else {
        throw new Error('file incorrect type');
    }
}

async function deleteFileCloudinary(_url) {
    const url = _url.split('/');

    const id = url
        .splice(url.length - 2, 2)
        .join('/')
        .split('.')[0];

    await cloudinary.uploader.destroy(id);

    return true;
}

export const files = {
    uploadFile,
    deleteFile,
    uploadFileCloudinary,
    deleteFileCloudinary,
    cloudinary
};
