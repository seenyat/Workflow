import { HeartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Like({ likeURL, content }) {
  const user = useSelector((state) => state.user);
  const [likes, setLikes] = useState([...content.likes]);
  const like = () => {
    if (user) {
      fetch(likeURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: user._id,
          contentID: content._id,
        }),
      });
    }
    if (likes.includes(user._id)) {
      setLikes(
        likes.filter((el) => {
          return String(el) !== String(user._id);
        })
      );
    } else {
      setLikes([...likes, user._id]);
    }
  };

  return (
    <div
      onClick={like}
      className={`flex  ${
        user &&
        "hover:text-pink-300 dark:hover:bg-opacity-30 hover:bg-opacity-50 hover:bg-pink-100 cursor-pointer"
      } text-gray-300  p-1 rounded-md    items-center `}
    >
      <HeartIcon className="w-5 h-5" />
      <div
        className={`pl-1 ${
          likes.length > 0 ? "" : "hidden"
        } select-none font-mono`}
      >
        {likes.length}
      </div>
    </div>
  );
}
