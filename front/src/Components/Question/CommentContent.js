import Time from "../../Utils/Time";
import AuthorCard from "../Partials/AuthorCard";

function CommentContent({ content }) {
  return (
    <div className="mt-2">
      <AuthorCard author={content.author} />
      <div className="py-1">{content.content}</div>
      <div className="text-xs text-gray-400">
        <Time time={content.date} />
      </div>
    </div>
  );
}

export default CommentContent;
