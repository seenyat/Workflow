export default function Member({ author }) {
  return author ? (
    <div className="h-full w-full flex flex-row justify-between items-center">
      <div className=" z-0 h-max w-max flex ">
        <img className="h-full w-max rounded-md" src={`${author.img}`} alt="" />
      </div>
      <div className="p-4  h-4/6 w-1/2  font-extrabold text-3xl text-black items-center justify-center flex flex-col">
        <span className="text-5xl font-extrabold mb-7 text-center membername">
          {author.name}
        </span>
        <span className="mb-7 text-center role">{author.role}</span>
        <span className="mb-14 text-center favorite">
          Любимое на проекте: <p>{author.favoriteLibrary}</p>
        </span>
        <span className="text-center p-2 text-3xl italic border-t-2 border-b-2 border-gray-700 cause">
          {author.cause}
        </span>
      </div>
    </div>
  ) : null;
}
