import { argsList } from "./readComandLine.js";

export const getQueryWords = () => {
    return argsList.filter((arg, id) => !arg.includes('-') && !argsList[id - 1]?.includes('-'))
}