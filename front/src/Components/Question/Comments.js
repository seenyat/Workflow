import { nanoid } from "nanoid";
import CommentContent from "./CommentContent";

function Comments({ answer }) {
  return (
    <div>
      {answer?.comments.map((el) => <CommentContent key={nanoid()} content={el} />)}
    </div>
  );
}

export default Comments;
