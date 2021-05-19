import Member from "../Components/Member";

export default function About() {
  const authors = [
    {
      name: "Anton",
      img: "http://s4.fotokto.ru/photo/full/158/1581480.jpg",
    },
    {
      name: "Roman",
      img: "https://cdn.viralporn.com/media/2-81206/5c54f064261e6.jpeg",
    },
    {
      name: "Ilya",
      img: "https://i.ytimg.com/vi/UWFfzx0tdfU/maxresdefault.jpg",
    },
    {
      name: "Andrey",
      img: "https://get.wallhere.com/photo/women-portrait-long-hair-ass-looking-at-viewer-sitting-in-bed-finger-in-mouth-black-hair-hair-mouth-Justin-Swain-clothing-Victoria-Sai-hand-leg-blond-hairstyle-human-positions-photo-shoot-human-body-thigh-undergarment-302512.jpg",
    },
  ];

  const pages = [
    "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];

  return (
    <div className="min-w-full no-scroll overflow-scroll min-h-full flex flex-col">
      {authors.map((aut) => (
        <Member author={aut} />
      ))}
    </div>
  );
}
