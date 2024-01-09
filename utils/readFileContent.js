import fs from 'fs'

export const readFileContent = (filePath) => {
    return fs.readFileSync(filePath, { encoding: 'utf8' })
}