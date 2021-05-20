export default function Member({ author }) {
  return author ? (
    <div className="h-full px-5 w-full flex flex-row justify-between items-center text-left">
      <div className=" z-0 h-full w-1/3  flex ">
        <img
          className="h-auto my-auto w-full rounded-md"
          src={`${author.img}`}
          alt=""
        />
      </div>
      <div className="p-4  h-full w-1/2  font-medium text-3xl text-black items-start justify-center flex flex-col">
        <span className="text-5xl font-bold mb-7  membername">
          {author.name}
        </span>
        <span className="mb-7  role">{author.role}</span>
        <span className="mb-7  favorite">
          Любимое на проекте: <p>{author.favoriteLibrary}</p>
        </span>
        <span className=" p-2 text-3xl italic border-t-2 border-b-2 border-gray-300 cause">
          {author.cause}
        </span>
      </div>
    </div>
  ) : null;
}
