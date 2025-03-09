import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file) throw new Error("File is undefined");
    const parser = new DataUriParser();
    const ext = path.extname(file.originalname); // Get the file extension
    return parser.format(ext, file.buffer); // Use extension instead of mimetype
};

export default getDataUri;
