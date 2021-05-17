import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
export default function AuthorCard({ author }) {
  
  
const user = useSelector(state=>state.user)  
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, )
  
  
  
  
  return (user?
    <div className="flex items-center space-x-2">
    <Link to={`/profile/${author._id == user._id? "":author._id}`} > <img
        className="inline-block h-8 w-8 rounded-md"
        src={author.avatar_url}
        alt=""
      /> 
      <div>{author.name}</div></Link> 
    </div>:<div className="flex items-center space-x-2">
    <Link to={`/profile/${author._id}`} > <img
        className="inline-block h-8 w-8 rounded-md"
        src={author.avatar_url}
        alt=""
      /> 
      <div>{author.name}</div></Link> 
    </div>
  );
}
