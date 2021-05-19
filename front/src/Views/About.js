import Member from "../Components/Member";
import { render } from "react-dom";
import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-with-gesture";

const authors = [
  {
    name: "Роман",
    img: "/Roman.jpg",
    status: "FullStack - разработчик",

    position: "Team-Lead",
  },
  {
    name: "Антон",
    img: "/Anton.jpg",
    status: "FullStack-разработчик",
  },
  {
    name: "Илья",
    img: "/Ilya.jpg",
    status: "FullStack-разработчик",
  },
  {
    name: "Андрей",
    img: "/Andrey.jpg",
    status: "FullStack-разработчик",
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
  return props.map(({ x, display, sc }, i) => (
    <div
      className="aboutUs   overflow-hidden
    "
    >
      <animated.div
        {...bind()}
        className="animatedBlock h-full"
        key={i}
        style={{
          display,
          transform: x.interpolate((x) => `translate3d(${x}px,0,0) `),
        }}
      >
        <animated.div
          className="animatedCard pointer-events-none"
          style={{
            transform: sc.interpolate((s) => `scale(${s})`),
          }}
        >
          <Member author={authors[i]} />
        </animated.div>
      </animated.div>
    </div>
  ));
}
