import Member from "../Components/Member";
import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const authors = [
  {
    name: "Антон",
    img: "/Anton.jpg",
    role: "FullStack - разработчик",
    favoriteLibrary: "React - Spring",
    cause: "Люблю когда все дергается и светится",
  },
  {
    name: "Илья",
    img: "/Ilya.jpg",
    role: "FullStack - разработчик",
    favoriteLibrary: "Passport JS",
    cause: "Авторизация без головной боли",
  },
  {
    name: "Андрей",
    img: "/Andrey.jpg",
    role: "FullStack - разработчик",
    favoriteLibrary: "Express",
    cause: "Кто-то должен был это сделать",
  },
  {
    name: "Роман",
    img: "/Roman.jpg",
    role: "FullStack - разработчик",
    favoriteLibrary: "Tailwind",
    cause: "Потому что это удобно",
    position: "Team - Lead",
  },
];

export default function About() {
  const index = useRef(0);
  const [props, set] = useSprings(authors.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            authors.length - 1
          ))
        );
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  return (
    <>
      <Link to="/stack">
        <div className="w-full shadow-md absolute hover:bg-gray-100 z-20 h-20 bg-white text-3xl flex justify-center items-center  outline-none">
          Наш стэк
        </div>
      </Link>
      {/* <div className="relative w"> */}
      {props.map(({ x, display, sc }, i) => (
        // <div key={nanoid()}>
        <animated.div
          {...bind()}
          className="animatedBlock w-full h-full"
          key={nanoid()}
          style={{
            display,
            transform: x.interpolate((x) => `translate3d(${x}px,0,0) `),
          }}
        >
          <animated.div
            className="animatedCard relative w-full h-full pointer-events-none"
            style={{
              transform: sc.interpolate((s) => `scale(${s})`),
            }}
          >
            <Member author={authors[i]} />
          </animated.div>
        </animated.div>
        // </div>
      ))}
      {/* </div> */}
    </>
  );
}
