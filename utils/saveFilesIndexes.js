import fs from 'fs'
import { PATH_TO_INDEX_FILE } from '../const/const.js';
import { argsList } from "./readComandLine.js";

export const saveFilesIndexes = (text) => {
    const definedIndexOptionIndex = argsList.findIndex(arg => arg === '-i')
    const PATH_TO_SAVE_FILE = (
        definedIndexOptionIndex !== argsList.length - 1 
        && definedIndexOptionIndex !== -1
        && argsList[definedIndexOptionIndex + 1]
    ) ? argsList[definedIndexOptionIndex + 1] : PATH_TO_INDEX_FILE
    fs.writeFileSync(PATH_TO_SAVE_FILE, text);
}