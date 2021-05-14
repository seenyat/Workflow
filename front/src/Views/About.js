import { useState } from "react";
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

  const [position, setPosition] = useState(0);

  const prevAuthor = () => {
    position > 0 ? setPosition(position - 1) : setPosition(3);
  };

  const nextAuthor = () => {
    position < 3 ? setPosition(position + 1) : setPosition(0);
  };

  return (
    <div className="border border-black min-w-1/2 w-full h-5/6 flex flex-row justify-evenly items-center">
      <i
        onClick={() => prevAuthor()}
        className="fa fa-arrow-left fa-5x "
        aria-hidden="true"
      />
      <Member author={authors[position]} />
      <i
        onClick={() => nextAuthor()}
        className="fa text-gray-300  fa-5x fa-arrow-right"
        aria-hidden="true"
      />
    </div>
  );
}
