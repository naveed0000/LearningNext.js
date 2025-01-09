import { comments } from "../data";


/* 
    localhost:3000/comments
    result 
    [
     {
        "id": 1,
        "text": "nurain  fith comment "
     }
    ]
*/
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id == parseInt(params.id));
  return Response.json(comment);
}
/* 
localhost:3000/comments/3
result 
{
  "text": "nurain resolve the issue of api " 
}

*/
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments.splice(index, 1); 
  return Response.json(deletedComment);
}
