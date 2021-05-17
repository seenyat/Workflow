import { render } from "react-dom";
import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
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

  //   const index = useRef(0);
  //   const [props, set] = useSprings(pages.length, (i) => ({
  //     x: i * window.innerWidth,
  //     sc: 1,
  //     display: "block",
  //   }));
  //   const bind = useGesture(
  //     ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
  //       console.log(123);
  //       if (down && distance > window.innerWidth / 2)
  //         cancel(
  //           (index.current = clamp(
  //             index.current + (xDir > 0 ? -1 : 1),
  //             0,
  //             pages.length - 1
  //           ))
  //         );
  //       set((i) => {
  //         if (i < index.current - 1 || i > index.current + 1)
  //           return { display: "none" };
  //         const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
  //         const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
  //         return { x, sc, display: "block" };
  //       });
  //     }
  //   );
  //   return props.map(({ x, display, sc }, i) => (
  //     <div className="divForAnimation">
  //       <animated.div {...bind()} key={i} style={{ display, x }}>
  //         <animated.div
  //           style={{
  //             transform: sc.interpolate((s) => `scale(${s})`),
  //             backgroundImage: `url(${pages[i]})`,
  //           }}
  //         />
  //       </animated.div>
  //     </div>
  //   ));
}
