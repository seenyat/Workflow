import useTimeAgo from "@dh-react-hooks/use-timeago";

import React from "react";
import ru from "./ruTime.ts";

export default function Time({ time }) {
  const localDate = new Date(time);

  const timeAgo = useTimeAgo(localDate, {
    interval: 60000,
    locale: "ru",
    localeRegister: ru,
  });
  return <div>{timeAgo}</div>;
}
