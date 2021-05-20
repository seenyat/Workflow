export default function Member({ author }) {
  return author ? (
    <div className="h-full w-full flex flex-row justify-between items-center">
      <div className=" z-0 h-max w-max flex ">
        <img className="h-full w-max rounded-md" src={`${author.img}`} alt="" />
      </div>
      <div className="p-4  h-4/6 w-1/2  font-extrabold text-xl text-black items-center justify-center flex flex-col">
        <span className="text-4xl font-extrabold mb-7 text-center">
          {author.name}
        </span>
        <span className="mb-7 text-center">{author.role}</span>
        <span className="mb-7 text-center">{author.position}</span>
        <span className="mb-14 text-center ">
          Любимое на проекте: <p>{author.favoriteLibrary}</p>
        </span>
        <span className="text-center p-2 text-xl italic border-t-2 border-b-2 border-gray-700 ">
          {author.cause}
        </span>
      </div>
    </div>
  ) : null;
}
