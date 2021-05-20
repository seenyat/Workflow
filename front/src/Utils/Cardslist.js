import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import CardWithUtil from "../Components/CardWithUtil";

const cards = [
  {
    name: "TailwindCSS.",
    img: "/logos/tailwind.png",
    categories: "Frontend",
  },
  {
    name: "TailwindUI",
    img: "/logos/tailwindUI.png",
    categories: "Frontend",
  },
  {
    name: "React",
    img: "/logos/react.png",
    categories: "Frontend",
  },

  {
    name: "Redux",
    img: "/logos/Redux.png",
    categories: "Frontend",
  },

  {
    name: "Redux-Saga",
    img: "/logos/Redux-Saga-Logo-Portrait.png",
    categories: "Frontend",
  },

  {
    name: "React-Spring",
    img: "/logos/react-spring.gif",
    categories: "Frontend",
  },

  {
    name: "Node.js",
    img: "/logos/nodejs.png",
    categories: "Backend",
  },
  {
    name: "Express",
    img: "/logos/express.png",
    categories: "Backend",
  },

  {
    name: "MongoDB",
    img: "/logos/mongodb-logo.png",
    categories: "Backend",
  },
  {
    name: "Mongoose",
    img: "/logos/mongoose.jpeg",
    categories: "Backend",
  },
  {
    name: "Passport JS",
    img: "/logos/Passport_js.png",
    categories: "Utilites",
  },
  {
    name: "Nodemailer",
    img: "/logos/nodemailer.png",
    categories: "Utilites",
  },
  {
    name: "Vercel",
    img: "/logos/vercel.png",
    categories: "Deploy",
  },
  {
    name: "DigitalOcean",
    img: "/logos/Digital_ocean.png",
    categories: "Deploy",
  },
  {
    name: "GitHub",
    img: "/logos/github.png",
    categories: "Utilites",
  },
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export default function Cardslist() {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 600 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      className="cardBlock h-full w-full mt-20 "
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        className="card w-1/6 h-4/5 md:w-1/5 md:h-1/6 "
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <CardWithUtil card={cards[cards.length - 1 - i]} />
      </animated.div>
    </animated.div>
  ));
}
