export default function Member({ author }) {
  return author ? (
    <div className="h-full w-full flex flex-col ">
      <div className="h-full w-full flex flex-row items-center z-0 ">
        <div className=" h-max min-w-max flex justify-center items-center ">
          <img src={`${author.img}`} alt="" />
        </div>
        <div className="bg-gray-200 p-16 h-full w-full font-extrabold text-3xl text-black items-center flex flex-col">
          <span className="text-8xl mb-14 ">{author.name}</span>
          <span> {author.position} </span>
          <span>{author.status}</span>
        </div>
      </div>
    </div>
  ) : null;
}
