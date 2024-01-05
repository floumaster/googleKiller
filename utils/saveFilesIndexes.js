import fs from 'fs'
import { PATH_TO_INDEX_FILE } from '../const/const.js';

export const saveFilesIndexes = (text) => {
    fs.writeFileSync(PATH_TO_INDEX_FILE, text);
}