export default function Member({ author }) {
  return author ? (

    <div className="h-full w-full flex flex-row items-center">
      <div className=" h-max min-w-max flex justify-center items-center ">
        <img src={`${author.img}`} alt="" />
      </div>
      <div className="bg-gray-200 p-16 h-full w-full font-extrabold text-3xl text-black items-center flex flex-col">
        <span className="text-8xl mb-14 ">{author.name}</span>
        <span className="mb-7">{author.role}</span>
        <span className="mb-7">{author.position}</span>
        <span className="mb-7">Любимая библиотека на проекте: {author.favoriteLibrary}</span>
        <span className="mb-14">{author.cause}</span>
      </div>
    </div>
  ) : null;
}
