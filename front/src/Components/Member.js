export default function Member({ author }) {
  return author ? (
    <div className="h-full w-full flex flex-row justify-center items-center">
      <div className=" z-0 h-max w-max flex justify-center items-center ">
        <img className="h-full w-max rounded-md" src={`${author.img}`} alt="" />
      </div>
      <div className="p-4  h-4/6 w-1/2  font-extrabold text-3xl text-black items-center justify-center flex flex-col">
        <span className="text-4xl mb-14 ">{author.name}</span>
        <span className="mb-7">{author.role}</span>
        <span className="mb-7">{author.position}</span>
        <span className="mb-7">
          Любимая библиотека на проекте: {author.favoriteLibrary}
        </span>
        <span className="mb-14"> {`<<${author.cause}>>`}</span>
      </div>
    </div>
  ) : null;
}
