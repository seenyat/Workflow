export default function Member({ author }) {
  return (
    <div className="min-h-screen w-full flex flex-row items-center border-black border-b ">
      <div className=" h-full w-4/6 flex justify-center items-center ">
        <img className=" " src={`${author.img}`} alt="" />
      </div>
      <div className="bg-gray-600 h-full w-2/6 font-extrabold text-3xl text-white flex justify-center items-center">
        {author.name}
      </div>
    </div>
  );
}
