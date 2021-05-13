import React from "react";
import { useSelector } from "react-redux";
import OneCardInFeed from "../Components/OneCardInFeed";

export default function Feed() {
  const { questions } = useSelector((state) => state);

  return questions.map((question) => (
    <OneCardInFeed key={question._id} question={question} />
  ));
}
