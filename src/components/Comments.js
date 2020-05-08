// Crear un componente Comments que tome como prop comments un array de objetos, y renderice
// un componente section
// un componente h2, dentro de section que tenga como texto 'Comentarios'
// por cada ítem de comments, generar un componente Comment con CommentUser y CommentContent dentro suyo
import React from "react";
import Comment from "components/Comment";
import CommentUser from "components/CommentUser";
import CommentContent from "components/CommentContent";

const Comments = ({ comments }) => {
  return (
    <section>
      <h2>Comentarios</h2>
      <Comment>
        {comments.map((comment) => (
          <div>
            <CommentUser>{comment.user}</CommentUser>
            <CommentContent>{comment.comment}</CommentContent>
          </div>
        ))}
      </Comment>
    </section>
  );
};

export default Comments;
