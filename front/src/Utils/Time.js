import ReactTimeAgo from "react-time-ago";

export default function Time({ time }) {
  return (
    <div>
      <ReactTimeAgo date={time} locale="ru" />
    </div>
  );
}
