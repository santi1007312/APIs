import { getCommets } from "../helpers/index.js";

export const getCommentsByID = async (id) => {
    const data = await getCommets (`posts/${id}/comments`);
    return data; 
}