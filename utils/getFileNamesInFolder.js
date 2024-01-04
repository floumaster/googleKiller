import fs from 'fs'

export const getFileNamesInFolder = (folder) => {
    return fs.readdirSync(folder)
}