import { get } from "../helpers/index.js";
export const getPostsById = async (id) => {
    const posts = await get (`posts`);
    console.log(`Total de publicaciones: ${posts.length}`);

    const post = await get(`posts/${id}`);
    const comments = await get (`comments?postId=${id}`);

    console.log("\nINFORMACION DE LA PUBLICACIÓN: ");
    console.log(`\nTitulo: ${post.title}`);
    console.log(`Contenido: ${post.body}`);

    if (comments.length===0){
        console.log("Esta publicacion no tiene comentarios");

        
    }else{
        console.log(`Numero de comentario: ${comments.length}` );
        console.log("\nInformacion de los comentarios: ");
        comments.forEach((comment, index) => {
            console.log(`${index + 1}. ${comment.body}`);
        });
        
    }
    
    
}

