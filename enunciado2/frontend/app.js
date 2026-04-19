
import { getPostsById, getPosts } from "./modules/posts/index.js";

let idPosts = prompt("Ingrese el ID de la publicacion que desea consultar: ");
await getPostsById(idPosts);
